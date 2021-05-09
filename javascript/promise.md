# Promise
链式调用处理异步，避免嵌套回调

## 基本使用
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random()
    if (num > 0.5) {
      resolve('success')
    } else {
      reject('fail')
    }
  }, 2000)
}).then(res => {
  //处理 resolve 之后的流程，res 为 resolve() 传递的参数
  console.log(res)
}, err => {
  // 处理 reject 之后的流程，err 为 reject() 传递的参数
  console.log(err)
})
```

## 异常处理
`Promise.prototype.catch()`用来处理`Promise`内同步抛出的异常
```javascript
new Promise((resolve, reject) => {
  throw new Error()
}).catch(() => {
  console.log('同步抛出异常')
})  // '同步抛出异常'
```
`Promise.prototype.catch()`也可以处理`reject`
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  })
}).catch(() => {
  console.log('rejected')
})  // 'rejected'
```
若既有`onrejected`回调，也有`Promise.prototype.catch()`，则`catch`只捕获同步抛出的异常
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  })
}).then(() => { }, () => {
  console.log('rejected')
}).catch(() => {
  console.log('同步抛出异常')
})  // 'rejected'
```

## 并发
在网络请求中，有时需要多个HTTP请求都完成时才能执行下一流程，可使用`Promise.all`实现并发
```javascript
Promise.all([
  new Promise((resovle) => {
    setTimeout(() => {
      resovle('frontend')
    })
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('web')
    }, 2000)
  })
]).then(res => {
  console.log(res)
})  // 2秒后输出 [ 'frontend', 'web' ]
```
传入的`promise`中有一个失败，则触发`onrejected`
```javascript
Promise.all([
  new Promise((resovle) => {
    setTimeout(() => {
      resovle('frontend')
    }, 5000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 2000)
  })
]).then(res => {
  console.log(res)
}, () => {
  console.log('rejected')
})  // 2秒后输出 'rejected'
```
