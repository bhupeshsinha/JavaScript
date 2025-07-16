console.log("Siya Ram")
console.log("********")

// function sum(a,b,c)
// {
//     let total = a+b+c
//     console.log(total)
// }

// function sum(a, ...num)    //REST Optr(...) is used: grouping of remaining elements as ARRAY, used for better readbility of code, used for DE-STRUCTURING   
// {
//     console.log(num)
//     console.log(a)
//     console.log(num[0])
//     console.log(num[1])
//     // console.log(num[2])

//     console.log(`Total sum is: ${a + num[0] + num[1] }`)
// }

// sum(4,5,6)


// let obj = {
//     title: "Lecture 30",
//     tags:"lec30, rest, spread",
//     description:"Hello Dosto"
// }

// let {title, tags, description} = obj
// console.log(title)
// console.log(tags)
// console.log(description)


// using REST Operator(...) for DE-STRUCTURING
// let {title, ...remaining} = obj
// console.log(title)
// console.log(remaining)

// function obj1(obj)
// {
//     console.log(obj)
// }

// obj1(obj)


// function obj1(...hello)
// {
//     console.log(hello)
// }

// obj1(obj)


//De-Structuring
// function obj1({title, tags, description})
// {
//     console.log(title)
//     console.log(tags)
//     console.log(description)
// }

// obj1(obj)

// function obj1({title, tags, description})
// {
//     console.log(tags)   
//     let tagsArray = tags.split(',')
//     console.log(tagsArray)
    
// }

// obj1(obj)

// ***************************************************************************************************************************************************************************************************************************************

// SPREAD OPERATOR
//1. De-Grouping
//2. Merge 2 array contents

// let arr = ['Jai', 'Ram', 'Jai', 'Ram', 'Jai', 'Ram', 'Jai', 'Ram']
// let arr2 = ['Hare', 'Ram','Hare', 'Ram','Hare', 'Ram','Hare', 'Ram',]

// let newArray = [...arr, ...arr2]
// let newArray2 = [...arr]
// console.log(newArray)   //SPREAD OPTR
// console.log(newArray2)  //SPREAD OPTR


// ***************************************************************************************************************************************************************************************************************************************

// let arr = [10,20,30,40,50]

// // CALLBACK Function: passing a function as an argument
// arr.forEach(function(val){
//     console.log(`Jai Siya Ram ${val}`)
// })   


// function hello(){
// return
// }


// let arr = [10,20,30,40,50]
// // Arrow Function
// const hello = () =>{
// return 
// }


// let arr = [10,20,30,40,50]
// // Arrow Function
// const hello = (arr) =>{
//     console.log(arr)
// }

// hello(arr)

// let arr = [10,20,30,40,50]

// function print(val)
// {
//     console.log(val)
// }

// const print2 = (val) =>
// {
//     console.log(val)
// }


// arr.forEach(print)
// arr.forEach(print2)

// let arr = [10,20,30,40,50]
// // forEach + arrow function

// arr.forEach((val) => console.log(val))

// let arr = [10,20,30,40,50] 
// const newArray = arr.map(function(val){
//     console.log(val)
//     return val
// })

// // map + arrow function
// const newArray2 = arr.map((val) => {
//     console.log(`Jai Siya Ram ${val}`)
//     return val
// })

// const newArray3 = arr.map((val)=> val*=10)

// console.log(newArray)
// console.log(newArray2)
// console.log(newArray3)

// Map()
// 1. Always return a new array
// 2. Map is used for updation, read, to perform certain operation, modification

// Filter()
// 1. Always return a new array
// 

// let arr = [10,20,30,40,50] 
// // const newArray = arr.filter((val) =>{
// //     if(val <= 30)
// //     {
// //         return val
// //     }
// // })

// const newArray = arr.filter((val)=> val<=30)
// console.log(newArray)


// Reduce()
// 1. Always return a new array
// 2.


// let arr = [10,20,30,40,50] 

// let sum = 0;
// for(let i=0;i<arr.length;i++)
// {
//     sum+=arr[i]
// }

// console.log(sum)

// const newArray = arr.reduce((accumulator, currentValue)=>{
//     accumulator = accumulator+currentValue
//     return accumulator
// }, 0 )

// const newArray = arr.reduce((acc, cur)=>{
//     acc = acc+cur
//     return acc
// }, 0 )

// const newArray = arr.reduce((acc, cur) => acc+=cur, 0)
// console.log(newArray)

// let arr = [
//     {name: 'Rinku', course:'Btech', branch:'CSE'},
//     {name: 'Rohit', course:'Btech', branch:'Civil'},
//     {name: 'Virat', course:'Btech', branch:'CSE'},
//     {name: 'Mukesh', course:'Btech', branch:'Mechanical'},
//     {name: 'Axar', course:'Btech', branch:'Civil'},
//     {name: 'Jadeja', course:'Btech', branch:'CSE'},
// ]


// filter() + arrow_function ()
// const newArray = arr.filter((val)=> val.branch=='Civil')
// console.log(newArray)

// const newArray2 = arr.filter((val)=> val.branch=='CSE')
// console.log(newArray2)

// const newArray = arr.filter((val)=> val.branch=='CSE')
// console.log(newArray)

// filter() + map() + arrow_function () 
// const newArray2 = arr
//   .filter(val => val.branch === 'CSE')  // Pehle CSE wale chuno
//   .map(val => val.name);   

// console.log(newArray2)

// const newArray = arr.filter((val)=>{
//     let fullName=''
//     if(val.branch == "CSE")
//     {
//         fullName+=val.name
//         return fullName
//         //console.log(fullName)
//     }
// })


// console.log(newArray)
let arr = [
    {name: 'Rinku', course:'Btech', branch:'CSE'},
    {name: 'Rohit', course:'Btech', branch:'Civil'},
    {name: 'Virat', course:'Btech', branch:'CSE'},
    {name: 'Mukesh', course:'Btech', branch:'Mechanical'},
    {name: 'Axar', course:'Btech', branch:'Civil'},
    {name: 'Jadeja', course:'Btech', branch:'CSE'},
]

// Chaining of method: filter()+map()+arrow()+callbacks
const newArray = arr
                    .filter((val) => val.branch === 'CSE')
                    .map((val) => val.name)
console.log(newArray)

