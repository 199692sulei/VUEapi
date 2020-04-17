<template>
  <ul id="turn-page">
    <li @click="turnPage('pre')">上一页</li>
    <template v-if="totalPage <= 7">
      <li
        v-for="i in totalPage"
        :key="i"
        :class="{ active: i == nowPage }"
        @click="turnPage(i)"
      >{{ i }}</li>
    </template>
    <template v-else>
      <!-- nowPage <= 4 -->
      <!-- 1,2,3,4,5,6 -->
      <template v-if="nowPage <= 4">
        <li v-for="i in 6" :key="i" :class="{ active: nowPage == i }" @click="turnPage(i)">{{ i }}</li>
      </template>
      <!-- nowPage > 4 -->
      <!-- 1 ... -->
      <template v-if="nowPage > 4">
        <li @click="turnPage(1)">1</li>
        <li>...</li>
      </template>
      <!-- nowPage> 4 && nowPage <=totalPage-4 -->
      <!-- n-2 n-1 n n+1 n+2 -->
      <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
        <li
          v-for="i in 5"
          :key="i"
          @click="turnPage(nowPage - 3 + i)"
          :class="{ active: i == 3 }"
        >{{ nowPage - 3 + i }}</li>
      </template>
      <!-- nowPage <= total-page-4 -->
      <!-- ... totalPage -->
      <template v-if="nowPage <= totalPage - 4">
        <li>...</li>
        <li @click="turnPage(totalPage)">{{ totalPage }}</li>
      </template>
      <!-- nowPage > total-page-4 -->
      <!-- t-5,t-4,t-3,t-2,t-1 t -->
      <template v-if="nowPage > totalPage - 4">
        <li
          v-for="i in 6"
          :key="i"
          :class="{ active: totalPage - 6 + i == nowPage }"
          @click="turnPage(totalPage - 6 + i)"
        >{{ totalPage - 6 + i }}</li>
      </template>
    </template>
    <li @click="turnPage('next')">下一页</li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["nowPage", "totalPage"])
  },
  methods: {
    turnPage(pageNum) {
      this.$store.dispatch("turnPage", pageNum);
    }
  }
};
</script>

<style>
#turn-page {
  user-select: none;
}
#turn-page .active {
  border-color: lightblue;
  border-width: 3px;
}
</style>