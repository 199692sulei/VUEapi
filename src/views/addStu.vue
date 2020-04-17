<template>
  <!-- 新增学生表单 -->
  <div class="add-student content" id="add-student">
    <form action="#" id="add-student-form" class="add-student-form">
      <div>
        <label for="name">姓名</label>
        <input type="text" name="name" autocomplete="off" v-model="stu.name" />
      </div>
      <div class="sex">
        <label for="sex">性别</label>
        <input type="radio" name="sex" checked value="0" v-model="stu.sex" />
        <span>男</span>
        <input type="radio" name="sex" value="1" v-model="stu.sex"  />
        <span>女</span>
      </div>
      <div>
        <label for="sNo">学号</label>
        <input type="text" id="sNo" name="sNo" v-model="stu.sNo" />
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" name="email" v-model="stu.email" />
      </div>
      <div>
        <label for="birth">出生年</label>
        <input type="text" id="birth" name="birth" v-model="stu.birth" />
      </div>
      <div>
        <label for="phone">手机号</label>
        <input type="text" id="phone" name="phone" v-model="stu.phone" />
      </div>
      <div>
        <label for="address">住址</label>
        <input type="text" id="address" name="address" v-model="stu.address" />
      </div>
      <div>
        <label for></label>
        <input type="button" value="提交" class="btn" id="add-submit" @click="commit" />
        <input type="button" value="重置" class="btn" @click="reset" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stu: {
        name: null,
        sex: 0,
        sNo: null,
        birth: null,
        phone: null,
        email: null,
        address: null
      }
    };
  },
  methods: {
    reset() {
      this.stu = {
        name: null,
        sex: 0,
        sNo: null,
        birth: null,
        phone: null,
        email: null,
        address: null
      };
    },
    commit(){
      this.$api.addStu(this.stu).then(data=>{
        this.$router.push("/stulist")
      })
    }
  }
};
</script>

<style>
</style>