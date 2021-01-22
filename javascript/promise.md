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
      this.#asyncResolveList.forEach(fn => fn())
    }
    const reject = result => {
      this.#status = 'rejected'
      this.#result = result
      this.#asyncRejectList.forEach(fn => fn())
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(resolve, reject) {
    if (this.#status === 'fulfilled' && resolve) {
      resolve(this.#result)
    }
    if (this.#status === 'rejected' && reject) {
      reject(this.#result)
    }
    if (this.#status === 'pending') {
      if (resolve) {
        this.#asyncResolveList.push(() => resolve(this.#result))
      }
      if (reject) {
        this.#asyncRejectList.push(() => reject(this.#result))
      }
    }
    return this
  }
  catch(reject) {
    if (this.#status === 'rejected' && reject) {
      reject(this.#result)
    }
    if (this.#status === 'pending' && reject) {
      this.#asyncRejectList.push(() => reject(this.#result))
    }
    return this
  }
}
```
