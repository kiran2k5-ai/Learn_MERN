function double(num){
    return num*2;
}
let arr = [2,3,4,5];
let doubledARR = arr.map(double);
console.log(doubledARR)

function isOdd(num){
    return num%2 != 0;
}

let oddnumber=arr.filter(isOdd);
console.log(oddnumber)


let sum = arr.reduce((product,current)=>{
    return product*current;
})

console.log()

let anss = arr.map((n)=>n*3).filter((n)=>n%2!=0).reduce((sum,car)=>sum+car);
console.log