# new
从构造函数创建对象，对象实例与构造函数的原型相同  
如果构造函数返回值为 `object`，则对象实例为该返回值，且实例原型不指向构造函数原型

## new实现
```javascript
var Animal = function (name, age) {
  this.name = name
  this.age = age
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} sound`)
}

var MyNew = function (Construct, ...args) {
  var obj = {}
  obj.__proto__ = Construct.prototype
  var result = Construct.apply(obj, args)
  if (typeof result === 'object') {
    return result
  }
  return obj
}

//测试用例
var dog = MyNew(Animal, 'dog', 1)
var cat = new Animal('cat', 2)
console.log(dog) // Animal {name: 'dog', age: 1}
console.log(cat) // Animal {name: 'cat', age: 2}
dog.makeSound() // 'dog sound'
cat.makeSound() // 'cat sound'
```
