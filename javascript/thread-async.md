# 单线程与异步
JavaScript是单线程执行的，即任一时刻只会执行一条语句

## Why
如果不是单线程执行，JavaScript同时修改同一DOM时会产生异常

## 异步
为避免耗时操作（如I/O操作）导致运行时阻塞，异步编程在JavaScript中得到大量应用
```javascript
/*
 * setTimeout中注册异步任务
 * 当前同步任务执行完毕后，再执行异步任务
 */
setTimeout(() => {
  console.log('异步')
})
console.log('同步')  // 先输出 '同步'，后输出 '异步'
```

## 宏任务与微任务
异步任务分为宏任务和微任务；  
一个宏任务可以包含多个微任务；  
JavaScript会将当前任务的微任务执行完毕后，再执行下一宏任务
```javascript
// setTimeout注册的异步任务是宏任务
setTimeout(() => {
  console.log('setTimeout注册的宏任务')
})

// Promise回调函数内的语句同步执行，Promise.prototype.then注册微任务
new Promise((resolve) => {
  resolve()
  console.log('Promise内同步执行的语句')
}).then(() => {
  console.log('Promise注册的微任务')
})

// 普通的同步任务
console.log('同步执行的语句')
/* 执行结果如下 */
// Promise内同步执行的语句
// 同步执行的语句        
// Promise注册的微任务   
// setTimeout注册的宏任务
```
