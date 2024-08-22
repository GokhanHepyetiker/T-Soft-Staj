<template>
  <ul class="todo-group">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="todo-item"
      draggable="true"
      @dragstart="onDragStart($event, todo)"
    >
      <span :class="{ completed: list === 'completed' }">{{ todo.text }}</span> <!-- Completed listesi için otomatik çizili metin -->
      <button @click="$emit('delete-todo', todo.id)">Delete</button> <!-- Sadece Delete butonu kalır -->
      <button v-if="editMode !== todo.id && list !== 'completed'" @click="startEdit(todo)">Edit</button> <!-- Completed listesinde Edit butonu gösterilmez -->
      <div v-if="editMode === todo.id" class="edit-container">
        <input v-model="editText" @keyup.enter="saveEdit(todo)" />
        <button @click="saveEdit(todo)">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
  list: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['move-todo', 'delete-todo', 'edit-todo']);

const editMode = ref(null);
const editText = ref('');

const onDragStart = (event, todo) => {
  event.dataTransfer.setData('todo-id', todo.id);
  event.dataTransfer.setData('from-list', props.list);
};

const startEdit = (todo) => {
  editMode.value = todo.id;
  editText.value = todo.text;
};

const saveEdit = (todo) => {
  emit('edit-todo', todo.id, editText.value, props.todos);
  editMode.value = null;
  editText.value = '';
};

const cancelEdit = () => {
  editMode.value = null;
  editText.value = '';
};
</script>

<style scoped>
.todo-group {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

span {
  flex-grow: 1;
}

span.completed {
  text-decoration: line-through;
  color: #999;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}
</style>
