<template>
  <div id="app">
    <h1>Drag and Drop</h1>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :draggable="index === movableIndex"
        @dragstart="dragStart(index)"
        @dragover.prevent="dragOver(index)"
        @dragleave="dragLeave(index)"
        @drop="drop(index)"
        :class="{
          hovered: index === hoverIndex,
          dragged: index === draggedItemIndex
        }"
        :style="{
          borderColor: (index === draggedItemIndex) ? '#ccc' : 'black'
        }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['', '', '', '', ''],
      draggedItemIndex: null,
      hoverIndex: null,
      movableIndex: 0 
    };
  },
  methods: {
    dragStart(index) {
      console.log({index});
      
      this.draggedItemIndex = index;
    },
    dragOver(index) {
      if (this.draggedItemIndex !== null && index !== this.draggedItemIndex) {
        this.hoverIndex = index;
      }
    },
    dragLeave(index) {
      if (this.hoverIndex === index) {
        this.hoverIndex = null;
      }
    },
    drop(index) {
      if (this.draggedItemIndex !== null) {
       
        if (index === this.draggedItemIndex) {
          this.draggedItemIndex = null;
          this.hoverIndex = null;
          return;
        }

        const draggedItem = this.items[this.draggedItemIndex];


        this.items.splice(index, 1, draggedItem);
        this.items.splice(this.draggedItemIndex, 1, '');
        
        this.draggedItemIndex = null;
        this.hoverIndex = null;

        
        this.movableIndex = index;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

li {
  width: 145px;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #f0f0f0;
  border: 5px solid black; 
  cursor: move;
  position: relative;
}

.hovered {
  border: 5px dashed white !important; 
  background-color: black; 
}

.dragged.active {
  border: 5px solid  black !important; 

}






</style>
