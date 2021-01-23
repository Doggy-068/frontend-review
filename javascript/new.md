# new

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
  Construct.apply(obj, args)
  return obj
}

//测试用例
var dog = MyNew(Animal, 'dog', 1)
var cat = new Animal('cat', 2)
console.log(dog) // Animal {name: 'dog', age: 1}
console.log(cat) // Animal {name: 'cat', age: 2}
dog.makeSound() // dog sound
cat.makeSound() // cat sound
```
