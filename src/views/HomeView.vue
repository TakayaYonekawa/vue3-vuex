<template>
  <div class="home">

  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}

</style>

<script>
  export default{
    name: 'HomeView',
    computed: {
      hasMemos(){
        return this.$store.getters.getCount
      },
      memos() {
        return this.$store.getters.getAll
      }
    }

  }
</script>