const strategies = {
  isNotEmpty(value, errorMsg) {
    if (value === '') {
      return errorMsg
    }
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg
    }
  }
}

class Validate {
  caches = []
  add(value, rules) {
    this.caches.push({ value, rules })
  }
  start() {
    for (let i = 0, len = this.caches.length; i < len; i++) {
      const cache = this.caches[i]
      const { value, rules } = cache
      for (let j = 0, l = rules.length; j < l; j++) {
        const rule = rules[j]
        const { strategy, errorMsg } = rule
        const strategyArr = strategy.split(':')
        const result = strategies[strategyArr[0]](value, ...strategyArr.slice(1), errorMsg)
        if (result) {
          return result
        }
      }
    }
  }
}

//测试用例
const validate = new Validate()
validate.add('', [{ strategy: 'isNotEmpty', errorMsg: '用户名不能为空' }])
validate.add('pass', [{ strategy: 'isNotEmpty', errorMsg: '密码不能为空' }, { strategy: 'minLength:6', errorMsg: '密码长度不能小于6位' }])

const errorMessage = validate.start()
if (errorMessage) {
  console.log(`验证失败，${errorMessage}`) // 验证失败，用户名不能为空
} else {
  console.log('验证成功')
}
