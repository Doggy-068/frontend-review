const iteration = function (...args) {
  for (let i = 0, len = args.length; i < len; i++) {
    const result = args[i]()
    if (result) {
      return result
    }
  }
}

function fn1() {
  return false
}

function fn2() {
  return 'dog'
}

function fn3() {
  return 'cat'
}

console.log(iteration(fn1, fn2, fn3)) // dog
console.log(iteration(fn3, fn2, fn1)) // cat
