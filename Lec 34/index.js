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
// function one(fn)
// {
//     fn();
//     console.log("Hello Function One")
//     fn();
// }

// function two()
// {
//     console.log("Hello Function Two")
// }

// one(two)

// function one(para, fun)
// {
//     console.log(fun)
//     console.log(para)
//     fun()
// }

// function two()
// {
//     console.log("Hello Two")
// }

// // one(45, function(){
// //     console.log("Anonymous Function")
// // })

// one(45, ()=>{
//     console.log("Arrow: Anonymous Function")
// })


// function add(a,b)
// {
//     console.log(a+b)
// }

// function sub(a,b)
// {
//     console.log(Math.abs(a-b))
// }

// function mul(a,b)
// {
//     console.log(a*b)
// }

// function Calci(num1, num2, fn)
// {
//     return fn(num1,num2)
// }

// Calci(10,20,add)
// Calci(10,20,sub)
// Calci(10,20,mul)



// closures
function makeFunc()
{
    const name = "Jai Hanuman";
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
console.log(myFunc)
console.log(myFunc())