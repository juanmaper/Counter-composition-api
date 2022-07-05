<template>
  <h1>Learning Slots</h1>
  <button>Open Modal</button>

  <modal title="Hello World"> 

    <template v-slot:body>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos vol</p>
    </template>

    <template v-slot:footer>
      <button>Exit</button>
    </template>

    <template v-slot:header>
      <h2>Modal title</h2>
    </template>

  </modal>
</template>

<script>
import Modal from '../components/Modal'

export default {
  components: { Modal }
}
</script>

<style>

</style>