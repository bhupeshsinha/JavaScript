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

