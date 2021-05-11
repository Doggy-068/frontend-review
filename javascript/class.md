# 类
类是对象的抽象，对象是类的实例

## ES5中的类
```javascript
//定义构造函数
function Animal(name, age) {
  this.name = name
  this.age = age
}

//为构造函数上的原型添加方法，实例对象通过原型链继承这些方法
Animal.prototype.makeSound = function () {
  console.log(`${this.name} sound`)
}

//调用构造函数创建实例对象
var animal = new Animal('dog', 1)
console.log(animal instanceof Animal)  // true
console.log(animal instanceof Object)  // true 所有对象都是 Object 的实例
console.log(animal.__proto__ === Animal.prototype)  // true 对象的原型指向构造函数的原型
console.log(animal.hasOwnProperty('name'))  // true 对象自身有 name 属性
console.log(animal.hasOwnProperty('makeSound'))  // false 对象自身没有 makeSound 方法
console.log('makeSound' in animal)  // true 原型链上存在 makeSound 方法
animal.makeSound()  // 'dog sound' 调用原型链上的 makeSound 方法
```

## ES6中的类
```javascript
/*
 * ES6中类的写法类似于其它面向对象语言
 * 本质上类的实现同ES5
 */
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  makeSound() {
    console.log(`${this.name} sound`)
  }
}

const animal = new Animal('dog', 1)
console.log(animal instanceof Animal)  // true
console.log(animal instanceof Object)  // true 所有对象都是 Object 的实例
console.log(animal.__proto__ === Animal.prototype)  // true 对象的原型指向构造函数的原型
console.log(animal.hasOwnProperty('name'))  // true 对象自身有 name 属性
console.log(animal.hasOwnProperty('makeSound'))  // false 对象自身没有 makeSound 方法
console.log('makeSound' in animal)  // true 原型链上存在 makeSound 方法
animal.makeSound()  // 'dog sound' 调用原型链上的 makeSound 方法
```
