
import { ref } from 'vue'
import axios from 'axios'

const useUsers = () => {

  const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref()

    const getUsers = async( page = 1 ) => {
      
      if ( page <= 0 ) return

      isLoading.value = true

      const { data } = await axios.get('https://reqres.in/api/users', {
        params: {
          page
        }
      })

      if ( data.data.length > 0 ){
        users.value = data.data
        currentPage.value = page
        errorMessage.value = null
      } else if( currentPage.value > 0 ) {
          errorMessage.value = 'There are no more users'
      }

      isLoading.value = false
    }

    getUsers()

    return {
      currentPage,
      errorMessage,
      isLoading,
      users,

      prevPage: () => getUsers( currentPage.value - 1),
      nextPage: () => getUsers( currentPage.value + 1)

    }

}

export default useUsers