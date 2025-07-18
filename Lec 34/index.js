console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

// var name = "Ram"
// for(let i =1;i<=108;i++)
// {
//     console.log(`${name + ' ' + i}`)
// }


// function fun1()
// {
//     return {'Name': "Ram"}
// }

// console.log(fun1())

// console.log((
//                 ()=>{
//                 return {'Name':"Hanuman"}
//             }
// ) ())

// const fun1 = () => {
//                 return {'Name':"Hanuman"}
//             }

// console.log(fun1())


// // Function Expression
// const fun2 = function(){
//     console.log("This Called Function Expression")
// }

// console.log(fun2())


//Callback: Passing function as a argument
function one(fn)
{
    fn();
    console.log("Hello Function One")
    fn();
}

function two()
{
    console.log("Hello Function Two")
}

one(two)