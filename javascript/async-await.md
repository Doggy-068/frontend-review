# async & await
以同步的方式写异步；  
async函数返回一个`Promise`；  
async函数内部用`await`控制异步流程；

## 接收解决值
```javascript
async function asyncFunc() {
  const res = await new Promise((resolve) => { resolve('success') })
  return res
}

asyncFunc().then(res => { console.log(res) })  // 'success'
```
上例`asyncFunc`隐式返回一个`Promise`，`asyncFunc`也可以写作如下形式
```javascript
async function asyncFunc() {
  const res = await new Promise((resolve) => { resolve('success') })
  return Promise.resolve(res)
}
```

## 顺序执行异步流程
async函数的`await`顺序同步执行
```javascript
async function asyncFunc() {
  const a = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('A')
      resolve('A')
    }, 3000)
  })
  const b = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('B')
      resolve('B')
    }, 1000)
  })
  return `${a}+${b}`
}

/*
 * 3秒后输出 'A'
 * 紧接着1秒后输出 'B'
 * 然后立即输出 'A+B'
 */
asyncFunc().then(res => { console.log(res) }) 
```

## 失败处理
async函数中用`trycatch`包裹`await`以接收`Promise`失败时的返回值。
```javascript
async function asyncFunc() {
  try {
    const res = await new Promise((resolve, reject) => {
      const flag = false
      setTimeout(() => {
        if (flag) {
          resolve('success')
        } else {
          reject('fail')
        }
      })
    })
    return res
  } catch (error) {
    return error
  }
}

asyncFunc().then(res => console.log(res))  // 'fail'
```
