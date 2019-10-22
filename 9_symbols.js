const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)
//
// console.log(symbol === other)

const obj = {
  name: 'Elena',
  demo: 'DEMO',
  [symbol]: 'meta'
}

for (let key in obj) {
  console.log(key)
}

console.log(obj.demo)
console.log(obj[symbol])

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
