# 响应式原理
使用 `Object.defineProperty` 遍历 `data` 对象的所有属性，在 `get` 中收集依赖，`set` 中通知依赖更新。
