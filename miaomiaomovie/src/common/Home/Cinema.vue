<template>
    <div>
      <Header></Header>
      这是一个影院
      <tobbar></tobbar>
    </div>
</template>

<script>
import Header from '@/publicComponents/Header.vue'
import tobbar from '@/publicComponents/tobbar.vue'
export default {
  name: 'cinema',
  components: {
    Header,
    tobbar
  }
}
</script>

<style scoped>

</style>
