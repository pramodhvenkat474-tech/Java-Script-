// Array

let a = 10

let arr = [10,20 ,30,40,50]

// console.log(arr[2])

// console.log(arr.length)

// console.log(arr[arr.length - 1])


// for(initialization; condition; increment/decrement) {
//     // block of code
// }

// 0++ => after block of code runs =>  1
// 0+1 => 1

// for(let b=0; b < arr.length; b++) {
//     console.log(b, arr[b] + 10)
// }
for(let b=arr.length -1; b >= 0;b--){
    console.log(b,arr[b])
}