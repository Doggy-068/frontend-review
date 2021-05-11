# 单例模式
整个程序的执行过程中，单例类只会创建一个实例对象

## JavaScript实现单例模式
```javascript
// Constructor 为构造函数
function singleTon(Constructor) {
  // 设置变量 result 标记实例对象
  let result = null
  // 返回一个函数，函数内访问变量 result(闭包)
  return function (...args) {
    // 如果 result 已指向实例对象，则构造函数不会执行，以实现单一实例对象
    return result || (result = new Constructor(...args))
  }
}

// 定义一个类
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// singleTonAnimal 实现 Animal 的单例类
const singleTonAnimal = singleTon(Animal)

/*
 * 多次调用 singleTonAnimal 只会创建一个对象实例
 * instance1 和 instance2 指向同一对象实例
 */
const instance1 = singleTonAnimal('dog', 1)
const instance2 = singleTonAnimal('cat', 2)
console.log(instance1)  // Animal { name: 'dog', age: 1 }
console.log(instance2)  // Animal { name: 'dog', age: 1 }
console.log(instance1 === instance2)  // true
```
