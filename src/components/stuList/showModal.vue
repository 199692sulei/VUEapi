<template>
  <div class="modal" id="modal">
    <div class="mask" @click="$store.commit('setModalShow',false)"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            :value="activeStu.name"
            @input="edit('name',$event.target.value)"
            ref="name"
          />
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input
            type="radio"
            name="sex"
            :checked="activeStu.sex==0"
            @change="edit('sex',0)"
            ref="sex"
          />
          <span>男</span>
          <input type="radio" name="sex" :checked="activeStu.sex==1" @change="edit('sex',1)" />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" :value="activeStu.sNo" readonly />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input
            type="text"
            name="email"
            :value="activeStu.email"
            @input="edit('email',$event.target.value)"
            ref="email"
          />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input
            type="text"
            name="birth"
            :value="activeStu.birth"
            @input="edit('birth',$event.target.value)"
            ref="birth"
          />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input
            type="text"
            name="phone"
            :value="activeStu.phone"
            @input="edit('phone',$event.target.value)"
            ref="phone"
          />
        </div>
        <div>
          <label for="address">住址</label>
          <input
            type="text"
            name="address"
            :value="activeStu.address"
            @input="edit('address',$event.target.value)"
            ref="address"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" id="edit-submit" @click="commit" />
          <input type="button" value="重置" class="btn" @click="reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      stu: {}
    };
  },
  computed: {
    ...mapState(["activeStu"])
  },
  methods: {
    ...mapActions(["updateStu"]),
    edit(key, value) {
      this.stu[key] = value;
    },
    commit() {
      let newStu = Object.assign({}, this.activeStu, this.stu);
      this.updateStu(newStu).then(data => {
        this.$Toast(data);
      });
    },
    reset() {
      for (let prop in this.$refs) {
        if (prop == "sex") {
          continue;
        }
        this.$refs[prop].value = "";
        this.stu[prop] = "";
      }
      this.$refs.sex.checked = true;
      this.stu.sex = 0;
    }
  }
};
</script>

<style>
</style>