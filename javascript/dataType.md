# 数据类型

## 字符串
用单引号或双引号包裹，具有属性`length`表示字符串的长度
```javascript
const str = 'JavaScript'
console.log(typeof str)  // 'string'
console.log(str.length)  // 10
```

## 数字
可用于四则运算
```javascript
const num = 10
console.log(typeof num)  // 'number'
```

## 布尔
逻辑值，只有`true`和`false`两个值
```javascript
const bool = true
console.log(typeof bool)  // 'boolean'
```

## 数组
一系列数据的集合，引用数据类型（变量指向内存地址，不是值本身）【类似于C语言指针】
```javascript
const arr = [1, 2, 3, 4, 5]
const point = arr  // point 和 arr 指向同一地址
point.push(6)
console.log(arr)  // [1, 2, 3, 4, 5, 6]
```
数组元素可以为不同数据类型
```javascript
const arr = [1, '1']
console.log(arr)  // [1, '1']
```

## 对象
键值对的映射，键为字符串/`symbol`，值为任意数据类型；引用数据类型
```javascript
const obj = {
  frontend: ['HTML', 'CSS', 'JavaScript']
}
const point = obj
point.flutter = 'Dart'
console.log(obj)  // { frontend: [ 'HTML', 'CSS', 'JavaScript' ], flutter: 'Dart' }
```

## 未定义
声明变量且并未赋值时，值为`undefined`
```javascript
let variable
console.log(variable)  // undefined
```

## 空
显式为变量赋值`null`，一般表示该变量将来可能会指向引用数据类型
```javascript
let point = null

//...省略其它部分代码

if (point && Array.isArray(point)) {
  point.push(1)
}
```

## symbol
`Symbol()`返回的值具有唯一性
```javascript
console.log(Symbol(1) === Symbol(1))  // false
```
