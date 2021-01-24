const factorial = function (n) {
  let num = n
  let res = 1
  while (num > 1) {
    res *= num
    num--
  }
  return res
}

const proxyFactory = function (fn) {
  const caches = {}
  return function (...args) {
    const key = args.join('')
    if (caches[key]) {
      return caches[key]
    }
    return caches[key] = fn.apply(this, args)
  }
}

const proxyFactorial = proxyFactory(factorial)

//测试用例
console.log(proxyFactorial(4)) // 24
console.log(proxyFactorial(4)) // 24 caches['4']
