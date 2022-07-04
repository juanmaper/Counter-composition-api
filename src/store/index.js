import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Wash dishes', completed: false },
      { id: '2', text: 'Clean room', completed: false },
      { id: '3', text: 'Iron clothes', completed: true },
      { id: '4', text: 'Shop food', completed: true },
      { id: '5', text: 'Call my doctor', completed: false },
    ]
  },
  getters: {
    pendingTodos( state, getters, rootState ) {
      return state.todos.filter( todo => !todo.completed )
    },
    allTodos: ( state ) => {
      return state.todos
    },
    completedTodos: ( state ) => {
      return state.todos.filter( todo => todo.completed )
    },
    getTodosByTab: ( _ , getters ) => ( tab ) => {

      switch (tab) {
        case 'all': getters.allTodos
        case 'pending': getters.pendingTodos
        case 'completed': getters.completedTodos
      }
    } 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
