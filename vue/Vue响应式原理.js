const data = {
    name: 'sulei',
    age: 18,
    obj: {},
    arr: [1, 2, 3],
    address: {
        province: 'HeNan',
        city: 'NanYang'
    }
}
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
['push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse'].forEach(method => {
    arrayMethods[method] = function () {
        arrayProto[method].call(this, ...arguments);
        render();
    }
})

function defineReactive(data, key, value) {
    observer(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('du')
            return value
        },
        set(newVal) {
            console.log('xie')
            if (value == newVal) {
                return;
            }
            value = newVal
            render()
        }
    })
}

function observer(data) {
    if (Array.isArray(data)) {
        data.__proto__ = arrayMethods;
        return;
    }
    if (typeof data == 'object') {
        for (const key in data) {
            defineReactive(data, key, data[key])
        }
    }
}

function render() {
    console.log('页面渲染了')
}
//#endregion
function $set(data, key, value) {
    if (Array.isArray(data)) {
        data.splice(key, 1, value);
        return value;
    }
    definReactive(data, key, value);
    render();
    return value
}

function $delete(data, key) {
    if (Array.isArray(data)) {
        data.splice(key, 1);
        return;
    }
    delete data[key];
    render();
}
observer(data)
// data.arr.push(100);
// console.log(data.arr);
// $set(data.arr, 0, 100)
// console.log(data.arr)
$delete(data.arr,2);
console.log(data.arr)