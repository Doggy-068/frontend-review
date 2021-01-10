# 数组
JavaScript中，数组元素的数据类型可以不一致  
数组属于对象  
数组可以越界访问，且返回值为 `undefined`
```javascript
const arr = ['1', 1, false, [{ num: 1 }]]  // 合法
console.log(typeof arr)  // object
console.log(arr[arr.length])  // undefined
```

## 数组解构
从数组中获取特定值并赋值给变量
```javascript
const arr = ['JavaScript', 'TypeScript', 'Java', 'C#', 'Kotlin']
const [first, second] = arr
const [, , , fourth] = arr
console.log(first, second, fourth)  // JavaScript TypeScript C#
```
可利用数组解构交换变量的值
```javascript
let a = 1, b = 2, c = 3;
[a, b, c] = [b, c, a]
console.log(a, b, c) // 2 3 1
```
