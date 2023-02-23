<template>
  <div>to：{{toMe()}}-----{{aa}}</div>
</template>

<script>
export default {
  name: "provideInJect",
  inject:['info','me','toMe'],
  data() {
    return {
    }
  },
  computed:{
    aa() {
      return this.toMe()
    }
  },
  mounted() {
    console.log(this.info,'info')
    console.log(this.me,'me')
    console.log(this.toMe(),'me')
  }
}
</script>

<style scoped>

</style>