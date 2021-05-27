# Set & Map
`Set`和`Map`是ES6新增的两种数据类型

## Set
`Set`集合中不会出现重复的元素
```javascript
const set = new Set([1, 1, 2, 3, 4, 4, 5, 5, 6])
console.log(set) // Set(6) { 1, 2, 3, 4, 5, 6 }
```

## Map
`Map`类似于对象，也是一种键值对结构，`Map`的键和值都可以为任意类型
```javascript
const map = new Map()
const obj = {}
map.set(obj, { name: 'map' })
console.log(map.get(obj)) // { name: 'map' }
```
