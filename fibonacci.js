//I used 2 methods to solve it to check the result

// Method #1
const lim = 7000000

let a = 4
let b = 18
let c = 76

let sum = 22

while (c < lim) {
  sum += c
  a = b
  b = c
  c = 4*b + a
}
console.log(sum);


// Method #2
const lim1 = 7000000

let a1 = 3
let b1 = 4
let c1 = 7

let arrEven = [4]

while (c1 < lim) {

  if (c1 % 2 === 0) {
    arrEven.push(c1)
  }
  a1 = b1
  b1 = c1

  c1 = a1 + b1
}

let sum1 = arrEven.reduce(function(a, b){
  return a + b;
}, 0);

console.log(sum1);