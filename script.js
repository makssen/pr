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

const counter = value => {
  return value++
}

counter(10)
counter(10)

const a = 20
const b = 30
