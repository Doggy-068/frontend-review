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

console.log(animal instanceof Animal) // true
console.log(animal instanceof Object) // true 所有对象都是 Object 的实例
console.log(animal.__proto__ === Animal.prototype) // true 对象的原型指向构造函数的原型
console.log(animal.hasOwnProperty('name')) // true 对象自身有 name 属性
console.log(animal.hasOwnProperty('makeSound')) // false 对象自身没有 makeSound 方法
console.log('makeSound' in animal) // true 原型链上存在 makeSound 方法
animal.makeSound() // dog sound 调用原型链上的 makeSound 方法
