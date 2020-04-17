<template>
  <div class="search">
    <label for="search-word">关键字搜索:</label>
    <input type="text" id="search-word" v-model="keywords" />
    <button id="search-submit" @click="search">搜索</button>
  </div>
</template>

<script>
export default {

  data(){
    return {
      keywords:''
    }
  },
  methods:{
    search(){
      this.$store.commit('setKeywords',this.keywords);
      this.$store.dispatch("turnPage",1)
    }
  }
};
</script>

<style>
</style>