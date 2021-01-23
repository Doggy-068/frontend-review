const singleton = function (fn) {
  let result = null
  return function (...args) {
    return result || (result = fn.apply(this, args))
  }
}

function createObj(name, age) {
  return {
    name,
    age
  }
}

const singletonCreateObj = singleton(createObj)

//测试用例
const obj1 = singletonCreateObj('dog', 1)
const obj2 = singletonCreateObj('cat', 2)
console.log(obj1) // {name: 'dog', age: 1}
console.log(obj2) // {name: 'dog', age: 1}
console.log(obj1 === obj2) // true
