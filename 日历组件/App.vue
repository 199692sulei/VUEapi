<template>
  <!-- <div>i am a cmp {{ msg }} -->
  <calendar />
  <!-- </div> -->
</template>
<script>
import Calendar from "./Calendar";
export default {
  data() {
    return {
      msg: "hello world"
    };
  },
  components: {
    Calendar
  }
};
</script>
<style>
</style>