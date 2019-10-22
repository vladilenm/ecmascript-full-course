class Person {
  type = 'human'

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(this.name + ' говорит привет!')
  }
}

// const max = new Person('Max')
// max.greet()
// console.log(max.type)

// console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
  constructor(name, job) {
    super(name)

    this._job = job
  }

  get job() {
    return this._job.toUpperCase()
  }

  set job(job) {
    if (job.length < 2) {
      console.log('Validation failed')
    } else {
      this._job = job
    }
  }

  greet() {
    super.greet()
    console.log('Rewritten')
  }
}

const fronted = new Programmer('Max', 'Frontend')
// console.log(fronted)
// fronted.greet()
// console.log(fronted.job)
fronted.job = 'Backend'
// console.log(fronted.job)

// Static
class Util {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}

const res = Util.average(1, 1, 2, 3, 5, 8, 13)
console.log(res)

// const util = new Util()
//
// console.log(util.average(1, 1, 2, 3, 5, 8, 13))
