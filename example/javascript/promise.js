new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random()
    if (num > 0.5) {
      resolve('success')
    } else {
      reject('fail')
    }
  }, 2000)
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
