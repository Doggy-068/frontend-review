# 作用域

## 函数作用域
`var` 声明的变量，函数内可访问
```javascript
function func() {
  var num = 0
  console.log(num)
}
func() // 0
console.log(num) // throw error, num is not defined
```

## 块作用域
`let` 声明的变量或 `const` 声明的常量，代码块内可访问
```javascript
{
  let num = 0
  console.log(num) // 0
}
console.log(num) // throw error, num is not defined
```

## 闭包
使用当前作用域之外的变量
