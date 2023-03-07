// function add(a, b = 3) {
//     return a + b
// }

// const add = (a, b) => {
//     return a + b
// }

const add = (a, b) => a + b

const hi = () => "Hello World!"

console.log(add(3, 4))
console.log(hi())

const mcd = (a, b) => {
    if (a === b) return a
    if (a > b) return mcd(a - b, b)
    return mcd(a, b - a)
}

console.log(mcd(24, 14))
console.log(mcd(72, 32))
console.log(mcd(32, 28))
console.log(mcd(15, 30))