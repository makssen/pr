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

const f1 = () => {
  let count = 0
  return () => {
    console.log(++count)
  }
}

const counter = f1()
counter()
counter()
counter()
