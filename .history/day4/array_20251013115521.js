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

// console.log(6)

// let arr = [1, 2, 3, 4, 5]; 
// let anss = arr
//   .map(n => n * 3)              
//   .filter(n => n % 2 !== 0)     
//   .reduce((sum, car) => sum + car, 0); 

// console.log(anss);

// RE-STRUCTURING
// let arr = [1, 2, 3, 4, 5];
// const [,,,first, second] = arr;

// console.log(first);  
// console.log(second); 

// let obj = [10, 20, 30, 40, 50];
// const nxt = [10, 20, ...obj] ;
// console.log(nxt);

// const obj1 = {a:10, b:20};
// const obj2 = {c:30, d:40};

// const spread = { ...obj1, ...obj2};
// console.log(spread);


//API's

let api = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
c