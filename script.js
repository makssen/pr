console.log('Hello')

console.log('new main')
const arr = [1, 2, 3, 4, 5]

const sum = arr.reduce((acc, item) => acc + item, 0)

console.log(sum)

const obj = {
  a: 1,
  b: 2
}

const sumObj = Object.values(obj).reduce((acc, item) => acc + item, 0)
console.log(sumObj)

function counter(value) {
  const res = []
  for (let i = 0; i < value; i++) {
    res.push(i + 1)
  }
  return res
}

let arrRes = counter(10)
console.log(arrRes)
