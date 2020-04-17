<template>
  <table border="0">
    <!-- 表头区域 -->
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- 表格内容 -->
    <tbody id="student-body">
      <tr v-for="(item,index) in list" :key="index">
        <td>{{item.sNo}}</td>
        <td>{{item.name}}</td>
        <td>{{item.sex==0?'男':'女'}}</td>
        <td>{{item.email}}</td>
        <td>{{(new Date()).getFullYear() - item.birth}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.address}}</td>
        <td>
          <button class="btn edit" @click="edit(item)">编辑</button>&nbsp;
          <button class="btn del" @click="del(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  created() {
    this.getStuList(1);
  },
  computed: {
    ...mapState({
      list: state => state.list
    })
  },
  methods: {
    ...mapActions(["getStuList",'delStu']),
    ...mapMutations(["setActiveStu","setModalShow"]),
    edit(stu) {
      this.setActiveStu(stu);
      this.setModalShow(true)
    },
    del(sNo){
      let del=window.confirm('确定要删除吗？？');
      if(del){
        this.delStu(sNo);
      }
    }
  }
};
</script>

<style>
</style>