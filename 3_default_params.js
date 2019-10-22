const defaultB = 30
const getDefault = c => c * 2

function compute(a = 10, b = getDefault(a)) {
  return a + b
}

console.log(compute())
