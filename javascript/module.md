# 模块
各模块的内部实现互不干扰，只关心模块的导入与导出

## CommonJS模块
Node直接支持CommonJS模块规范
```javascript
//math.js
function sum(a, b) {
  return a + b
}

const math = { sum }

module.exports = math
```
```javascript
//main.js
const math = require('./math')

console.log(math.sum(1, 2)) // 3
```

## ES6模块
Node中ES6模块的文件后缀为.mjs
```javascript
//math.mjs
function sum(a, b) {
  return a + b
}

const math = { sum }

export default math
```
```javascript
//main.mjs
import math from './math.mjs'

console.log(math.sum(1, 2)) // 3
```
