# 发布-订阅模式

## JavaScript实现
```javascript
class PubSubEvent {
  constructor() {
    this.clientList = {}
  }
  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  }
  trigger(...args) {
    const key = args.shift()
    const fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    fns.forEach(fn => fn(...args))
  }
  remove(key, fn) {
    const fns = this.clientList[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns.length = 0
    } else {
      for (let i = 0, len = fns.length; i < len; i++) {
        if (fn === fns[i]) {
          fns.splice(i, 1)
        }
      }
    }
  }
}
```
