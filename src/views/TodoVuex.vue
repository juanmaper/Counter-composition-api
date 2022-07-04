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


</template>

<script>
import '../composables/useTodo'
import useTodo from '../composables/useTodo'

export default {
  setup() {

    const {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo
    } = useTodo()

    return {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo
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