# Promise

## Promise实现(基础版)
```javascript
class MyPromise {
  #status = 'pending'
  #result = undefined
  #asyncResolveList = []
  #asyncRejectList = []
  constructor(executor) {
    const resolve = result => {
      this.#status = 'fulfilled'
      this.#result = result
      this.#asyncResolveList.forEach(fn => fn(this.#result))
    }
    const reject = result => {
      this.#status = 'rejected'
      this.#result = result
      this.#asyncRejectList.forEach(fn => fn(this.#result))
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(resolve, reject) {
    if (this.#status === 'fulfilled') {
      resolve(this.#result)
    }
    if (this.#status === 'rejected') {
      reject(this.#result)
    }
    if (this.#status === 'pending') {
      this.#asyncResolveList.push(resolve)
      this.#asyncRejectList.push(reject)
    }
  }
}
```
