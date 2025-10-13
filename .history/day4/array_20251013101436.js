// function double(num){
//     return num*2;
// }
// let arr = [2,3,4,5];
// let doubledARR = arr.map(double);
// console.log(doubledARR)

// function isOdd(num){
//     return num%2 != 0;
// }

// let oddnumber=arr.filter(isOdd);
// console.log(oddnumber)


// let sum = arr.reduce((product,current)=>{
//     return product*current;
// })

console.log(6)

let arr = [1, 2, 3, 4, 5]; 
let anss = arr
  .map(n => n * 3)              // multiply each element by 3
  .filter(n => n % 2 !== 0)     // keep only odd numbers
  .reduce((sum, car) => sum + car, 0); // sum them up with initial value 0

console.log(anss);
