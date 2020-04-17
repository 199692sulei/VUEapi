<template>
  <div class="student-list content" id="student-list">
    <stu-search></stu-search>
    <stu-table></stu-table>
    <transition>
      <show-modal v-if="flag"></show-modal>
    </transition>
    <turn-page></turn-page>
  </div>
</template>

<script>
import stuSearch from "../components/stuList/stuSearch";
import stuTable from "../components/stuList/stuTable";
import showModal from "../components/stuList/showModal";
import turnPage from "../components/stuList/turnPage";
export default {
  components: {
    stuSearch,
    stuTable,
    showModal,
    turnPage
  },
  computed: {
    flag() {
      return this.$store.state.modalShow;
    }
  }
};
</script>

<style>
.v-enter {
  top: -100%;
  opacity: 0;
}
.v-enter-to {
  top: 0;
  opacity: 1;
}
.v-leave {
  top: 0;
  opacity: 1;
}
.v-leave-to {
  top: -100%;
  opacity: 0;
}
.v-enter-active {
  transition: all 0.5s;
}
.v-leave-active {
  transition: all 0.5s;
}
</style>