<template>
  <h1>Todo list</h1>
  <!-- <h4>Pending todos: {{ $store.state.todos.filter( t => !t.completed).length }}</h4> -->
  <h4>Pending todos: {{ pending.length }}</h4>

  <hr>
  <button 
    :class="{ 'active' : currentTab === 'all' }"
    @click="currentTab = 'all'"
  >
    Todos
  </button>
  <button 
    :class="{ 'active' : currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pending
  </button>
  <button 
    :class="{ 'active' : currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completed
  </button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
      :class="{ 'completed' : todo.completed }"
      @dblclick="toggleTodo( todo.id )">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Create todo</button>

  <modal v-if="isOpen" 
         @click.self="closeModal"> 

    <template v-slot:header>
      <h2>Create todo</h2>
    </template>

    <template v-slot:body>
      <form @submit.prevent="onSubmitTodo(); closeModal()">
        <input type="text" placeholder="Description of todo" v-model="newTodoText">
      </form>

      <br>
      <br>
      <button type="submit" @click.prevent="onSubmitTodo(); closeModal()">Create</button>
    </template>

    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>

  </modal>
  


</template>

<script>
import { ref } from 'vue'

import '../composables/useTodo'
import useTodo from '../composables/useTodo'
import Modal from '../components/Modal'

export default {
  components: { Modal },
  setup() {

    const {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo,
      createTodo
    } = useTodo()

    const isOpen = ref(false)
    const newTodoText = ref('')

    const onSubmitTodo = () => {
        createTodo(newTodoText.value)
        newTodoText.value = ''
      }

    return {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo,
      isOpen,
      createTodo,
      newTodoText,
      onSubmitTodo,

      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
    }

  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed { 
  text-decoration: line-through;
}
</style>