# 节流
在某个时间段内多次触发事件，按照一定时间间隔多次调用函数

```javascript
/**
 * @description 防抖
 * @param method 调用的函数
 * @param wait 时间间隔，单位毫秒
 * @param isLeading 调用是否在节流开始前
 * @param args 传递给 method 的参数
 */
function throttle(method, wait, isLeading, ...args) {
  let timer = NaN
  return function () {
    const _this = this
    if (isLeading) {
      if (!timer) {
        method.call(_this, ...args)
        timer = setTimeout(() => {
          timer = NaN
        }, wait)
      }
    } else {
    if (!timer) {
      timer = setTimeout(() => {
        method.call(_this, ...args)
        timer = NaN
        }, wait)
      }
    }
  }
}
```
