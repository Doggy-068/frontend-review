# new
调用构造函数创建对象实例，对象实例的原型与构造函数的原型相同

## new操作符执行过程
```javascript
// 声明一个构造函数
var Animal = function (name, age) {
  this.name = name
  this.age = age
}

// 原型链上绑定方法
Animal.prototype.makeSound = function () {
  console.log(`${this.name} sound`)
}

/*
 * 以 MyNew 模拟 new 操作符
 */
var MyNew = function (Construct, ...args) {
  // 新建一个空对象
  var obj = {}
  // 新建对象的原型指向构造函数原型
  obj.__proto__ = Construct.prototype
  // 绑定新建对象为this调用构造函数，即给新建对象添加属性
  var result = Construct.apply(obj, args)
  // 如果构造函数的返回值是一个对象，则直接返回该对象
  if (typeof result === 'object') {
    return result
  }
  // 否则返回新建的对象
  return obj
}

/*
 * MyNew 和 new 有相同的执行效果
 */
var dog = MyNew(Animal, 'dog', 1)
var cat = new Animal('cat', 2)
console.log(dog)  // Animal {name: 'dog', age: 1}
console.log(cat)  // Animal {name: 'cat', age: 2}
dog.makeSound()  // 'dog sound'
cat.makeSound()  // 'cat sound'
console.log(dog.__proto__ === Animal.prototype)  // true
console.log(cat.__proto__ === Animal.prototype)  // true
```
