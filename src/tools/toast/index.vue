<template>
  <div id="toast" :class="flag ? 'fade-in' : 'fade-out'" v-if="show">
    <div id="content" :class="clas">{{ types }} {{ msg }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#toast {
  width: 200px;
  height: 60px;

  font-size: 16px;
  font-weight: 800;
  text-align: center;
  line-height: 60px;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes fadeIn {
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 50px;
    opacity: 1;
  }
}

@keyframes fadeOut {
  100% {
    top: 0;
    opacity: 0;
  }
  0% {
    top: 50px;
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 0.5s forwards;
}
.fade-out {
  animation: fadeOut 0.5s forwards;
}
#content {
  width: 100%;
}
.err {
  background-color: red;
  color: pink;
}
.suc {
  background-color: aquamarine;
  color: white;
}
</style>