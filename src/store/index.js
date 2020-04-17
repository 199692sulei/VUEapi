import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    size: 3,
    totalPage: 0,
    count: 0,
    nowPage: 1,
    activeStu: null,
    modalShow: false,
    keywords: ''
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setTotalPage(state, count) {
      state.count = count;
      state.totalPage = Math.ceil(count / state.size)
    },
    setActiveStu(state, stu) {
      state.activeStu = stu
    },
    setModalShow(state, bool) {
      state.modalShow = bool;
    },
    setNowPage(state, page) {
      state.nowPage = page
    },
    setKeywords(state, kw) {
      state.keywords = kw;
    }
  },
  actions: {
    getStuList({
      commit,
      state
    }) {
      api.findByPage(state.nowPage, state.size).then(data => {
        commit("setList", data.data.data.findByPage)
        commit("setTotalPage", data.data.data.cont)
      })
    },
    updateStu({
      commit,
      state
    }, stu) {
      return api.updateStu(stu).then(data => {
        if (data.data.status == 'fail') {
          return {
            msg: data.data.msg,
            type: 2
          }
        } else {
          commit("setModalShow", false)
          return {
            msg: data.data.msg,
            type: 1
          }
        }
      })
    },
    turnPage({
      commit,
      state,
      dispatch
    }, page) {
      let p = state.nowPage
      if (page == "pre") {
        if (state.nowPage > 1) {
          commit("setNowPage", state.nowPage - 1)
        }
      } else if (page == "next") {
        if (state.nowPage < state.totalPage) {
          commit("setNowPage", state.nowPage + 1)
        }
      } else {
        commit("setNowPage", page)
      }
      // dispatch("getStuList");
      if (state.keywords) {
        dispatch("searchStu")
      } else {
        dispatch("getStuList");
      }
    },
    delStu({
      commit,
      dispatch,
      state
    }, sNo) {
      api.delStu(sNo).then(_ => {
        if (state.list.length == 1) {
          if (state.nowPage == state.totalPage) {
            dispatch("turnPage", state.nowPage - 1)
          } else {
            dispatch("turnPage", state.nowPage)
          }
        } else {
          dispatch("turnPage", state.nowPage)
        }
      })
    },
    searchStu({
      commit,
      dispatch,
      state
    }) {
      api.searchStu({
        search: state.keywords,
        page: state.nowPage,
        size: state.size,
        sex: -1
      }).then(data => {
        commit("setList", data.data.data.searchList)
        commit("setTotalPage", data.data.data.cont)
      })
    }
  },
  modules: {}
})