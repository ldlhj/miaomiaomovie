<template>
<div>
  <Header></Header>
  这是Mine
  <tobbar></tobbar>
</div>
</template>

<script>
import Header from '@/publicComponents/Header.vue'
import tobbar from '@/publicComponents/tobbar.vue'
export default {
  name: 'Mine',
  components: {
    Header,
    tobbar
  }
}
</script>

<style scoped>

</style>
