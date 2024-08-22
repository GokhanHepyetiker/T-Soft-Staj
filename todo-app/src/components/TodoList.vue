<template>
  <div class="todo-list-container">
    <div class="input-container">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
      <button @click="addTodo">Add</button>
    </div>
    <div class="todo-columns">
      <div class="todo-column" @drop.prevent="handleDrop($event, todos)" @dragover.prevent>
        <h2>Yapılacak İşler</h2>
        <TodoGroup :todos="todos" @delete-todo="id => deleteTodo(id, todos)" @move-todo="moveTodo" @edit-todo="editTodo" list="todos" />
      </div>
      <div class="todo-column" @drop.prevent="handleDrop($event, inProgress)" @dragover.prevent>
        <h2>Uğraşılıyor</h2>
        <TodoGroup :todos="inProgress" @delete-todo="id => deleteTodo(id, inProgress)" @move-todo="moveTodo" @edit-todo="editTodo" list="inProgress" />
      </div>
      <div class="todo-column" @drop.prevent="handleDrop($event, completed)" @dragover.prevent>
        <h2>Biten İşler</h2>
        <TodoGroup :todos="completed" @delete-todo="id => deleteTodo(id, completed)" @move-todo="moveTodo" @edit-todo="editTodo" list="completed" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import TodoGroup from './TodoGroup.vue';

const todos = ref([]);
const inProgress = ref([]);
const completed = ref([]);
const newTodo = ref('');

watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
}, { deep: true });

watch(inProgress, (newInProgress) => {
  localStorage.setItem('inProgress', JSON.stringify(newInProgress));
}, { deep: true });

watch(completed, (newCompleted) => {
  localStorage.setItem('completed', JSON.stringify(newCompleted));
}, { deep: true });

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false,
    });
    newTodo.value = '';
  }
};

const moveTodo = (id, fromList, toList) => {
  const todoIndex = fromList.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    const [todo] = fromList.splice(todoIndex, 1);
    if (Array.isArray(toList)) {
      toList.push(todo);
    } else {
      console.error('Target list is not an array');
    }
  } else {
    console.error('Todo not found in the source list');
  }
};

const deleteTodo = (id, list) => {
  if (Array.isArray(list)) {
    const updatedList = list.filter(todo => todo.id !== id);
    if (list === todos.value) {
      todos.value = updatedList;
    } else if (list === inProgress.value) {
      inProgress.value = updatedList;
    } else if (list === completed.value) {
      completed.value = updatedList;
    }
  } else {
    console.error('List is undefined or not an array:', list);
  }
};

const editTodo = (id, newText, list) => {
  if (Array.isArray(list)) {
    const todo = list.find(todo => todo.id === id);
    if (todo) {
      todo.text = newText;
    } else {
      console.error('Todo not found');
    }
  } else {
    console.error('List is not an array');
  }
};

const handleDrop = (event, toList) => {
  const id = event.dataTransfer.getData('todo-id');
  const fromListName = event.dataTransfer.getData('from-list');
  const fromList = fromListName === 'todos' ? todos.value : fromListName === 'inProgress' ? inProgress.value : completed.value;
  moveTodo(parseInt(id), fromList, toList);
};

onMounted(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }

  const savedInProgress = localStorage.getItem('inProgress');
  if (savedInProgress) {
    inProgress.value = JSON.parse(savedInProgress);
  }

  const savedCompleted = localStorage.getItem('completed');
  if (savedCompleted) {
    completed.value = JSON.parse(savedCompleted);
  }
});
</script>

<style scoped>

.todo-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px;
  transition: border-color 0.3s ease;
}

input::placeholder {
  color: #42b983;
}


input:focus-visible {
  outline: none;
  border-color: #42b983;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #369f6e;
}

button:active {
  transform: scale(0.95);
}

.todo-columns {
  display: flex;
  justify-content: space-around;
  width: 100%;
  
}

.todo-column {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30%;
}

.todo-column h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
