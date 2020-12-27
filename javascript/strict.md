# 严格模式
全局开启严格模式
```javascript
'use strict'
var str = 'in strict'
```
函数内开启严格模式
```javascript
function func() {
  'use strict'
  var str = 'in strict'
}
var str = 'not in strict'
```

## 严格模式下的变化
1、不允许使用未声明的变量
```javascript
'use strict'
num = 0 // throw error, num is not defined
```
```javascript
num = 0
console.log(num) // 0
```
2、禁止 `this` 指向全局对象
```javascript
'use strict';
(function () {
  console.log(this) // undefined
})()
```
```javascript
(function () {
  console.log(this) // window(browser), global(node)
})
```
