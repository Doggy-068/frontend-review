# 作用域

## 函数作用域
`var`声明的变量，函数内可访问
```javascript
function func() {
  var num = 0
  console.log(num)
}
func()  // 0
console.log(num)  // throw error, num is not defined
```

## 块级作用域
`let`声明的变量或`const`声明的常量，代码块内可访问
```javascript
{
  let num = 0
  console.log(num)  // 0
}
console.log(num)  // throw error, num is not defined
```

## 闭包
沿着作用域链，访问当前作用域之上层作用域的变量，延长了变量的生命周期
```javascript
const handle = {}

/*
 * var声明函数作用域变量
 * for循环中声明的变量 i 作用于文件顶级
 * handle[Symbol(i)]绑定的方法沿着作用域链查找变量 i，访问的是for循环中声明的变量 i
 * for循环结束后变量 i 的值为3
 * 故调用handle[Symbol.for(i)]输出的值为3
 */
for (var i = 0; i < 3; i++) {
  Reflect.set(handle, Symbol.for(i), () => {
    console.log(i)
  })
}

handle[Symbol.for(0)]()  // 3
handle[Symbol.for(1)]()  // 3
handle[Symbol.for(2)]()  // 3
```
若`for`循环中使用`let`声明变量`i`，则结果不同
```javascript
const handle = {}

/*
 * let声明块级作用域变量
 * 每执行一次for循环，代码块中保存一个变量 i
 * handle[Symbol.for(i)]绑定的方法访问所在代码块的变量 i
 */
for (let i = 0; i < 3; i++) {
  Reflect.set(handle, Symbol.for(i), () => {
    console.log(i)
  })
}

handle[Symbol.for(0)]()  // 0
handle[Symbol.for(1)]()  // 1
handle[Symbol.for(2)]()  // 2
```
