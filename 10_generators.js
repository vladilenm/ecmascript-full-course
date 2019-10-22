const array = [10, 20, 30, 40]
const str = 'Hello'

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

// const iter = str[Symbol.iterator]()
//
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// for (let item of str) {
//   console.log(item)
// }

// const country = {
//   values: ['ru', 'kz', 'ua', 'by'],
//   [Symbol.iterator]() {
//     let i = 0
//     return {
//       next: () => {
//         const value = this.values[i]
//         i++
//         return {
//           done: i > this.values.length,
//           value
//         }
//       }
//     }
//   }
// }
//
// for (let item of country) {
//   console.log(item)
// }

// Generator
function *gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i
    } catch (e) {
      console.log('Error', e)
    }
  }
}

const iter = gen(3)
console.log(iter.next())
console.log(iter.throw('My Error'))
console.log(iter.next())
console.log(iter.next())

// for (let i of gen(4)) {
//   console.log(i)
// }
