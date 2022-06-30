import { ref } from "vue"
import axios from 'axios'

const usePokemon = ( pokemonId = '1' ) => {

  const pokemon = ref()
  const isLoading = ref(false)
  const errorMessage = ref()

  const searchPokemon = async() => {

    isLoading.value = true
    pokemon.value = null

    try {

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
      pokemon.value = data
      errorMessage.value = null

    } catch (error) {
      errorMessage = 'The pokemon could not be loaded'
    }

    isLoading.value = false
  }

  searchPokemon()

  return {
    errorMessage,
    isLoading,
    pokemon,
  }

}

export default usePokemon