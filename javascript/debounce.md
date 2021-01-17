# 防抖
在某个时间段内多次触发事件，只有最后一次调用函数

```javascript
/**
 * @description 防抖
 * @param method 调用的函数
 * @param wait 延时时间，单位毫秒
 * @param args 传递给 method 的参数
 */
function debounce(method, wait, ...args) {
  let timer = NaN
  return function () {
    const _this = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      method.call(_this, ...args)
    }, wait)
  }
}
```
