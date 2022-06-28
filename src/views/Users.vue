<template>
  <h2>Wait please...</h2>
  <h2>Users</h2>
  <h5>Loading error...</h5>

  <div>
    <ul>
      <li>
        <h4>Username</h4>
        <h6>email</h6>
      </li>
    </ul>
  </div>

  <button>Back</button>
  <button>Next</button>
  <span> Page: 5 </span>

</template>

<script>
import { ref } from 'vue'
import { axios } from 'axios'

export default {

  setup() {

    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref(1)

    const getUsers = async( page = 1 ) => {
      
      if ( page <= 0 ) page = 1

      isLoading.value = true

      const { data } = await axios.get('https://reqres.in/api/users', {
        params: {
          page
        }
      })

      if ( data.data.length > 0 ){
        users.value = data.data
        currentPage.value = page
      } else if( currentPage.value > 0 ) {
          errorMessage.value = 'There are no more users'
      }
    }

    getUsers()




  }

}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}
div {
    display: flex;
    justify-content: center;
    text-align: center;
}
ul {
    width: 250px;
}
</style>