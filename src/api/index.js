import Axios from "axios";
import URLs from './URLs'
const Request = Axios.create({
    baseURL: URLs.base,
    method: "GET",
    params: {
        appkey: "DuYiyongzhi_1564986206465"
        // DuYiyongzhi_1564986206465
        // 13271325338_1569760343166
    }
})

function findByPage(page, size) {
    return Request({
        url: URLs.findByPage,
        params: {
            page,
            size
        }
    })
}
//#endregion
function updateStu(options) {
    return Request({
        url: URLs.updateStu,
        params: {
            ...options
        }
    })
}

function addStu(options) {
    return Request({
        url: URLs.addStu,
        params: {
            ...options
        }
    })
}
function delStu(sNo) {
    return Request({
        url: URLs.delStu,
        params: {
            sNo
        }
    })
}

function searchStu(options) {
    return Request({
        url: URLs.searchStu,
        params: {
            ...options
        }
    })
}
//#endregion
export default {
    findByPage,
    updateStu,
    addStu,
    delStu,
    searchStu
}