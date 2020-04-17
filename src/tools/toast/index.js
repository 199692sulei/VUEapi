import Vue from "vue";
import toast from './index.vue';

const Toast = Vue.extend(toast);


export default function ({
    msg,
    type
} = {
    msg: "ok",
    type: 1
}, duration = 2000) {
    let app = new Toast({
        data: {
            msg,
            type,
            flag: true,
            show: true,
        },
        computed: {
            types() {
                switch (this.type) {
                    case 1:
                        return "✔";
                    case 2:
                        return "✖";
                    default:
                        return "✖"
                }
            },
            clas() {
                switch (this.type) {
                    case 1:
                        return "suc";
                    case 2:
                        return "err";
                    default:
                        return "err"
                }
            }
        },
        el: document.createElement("div")
    })
    document.body.appendChild(app.$el);
    setTimeout(_ => {
        app.flag = false;
    }, duration - 200)
    setTimeout(_ => {
        app.show = false;
    }, duration)
}