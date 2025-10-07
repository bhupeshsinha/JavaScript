console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

// {
//     console.log(`GIVES UNDEFINED: Inner let ${a}`)
//     var a ="Ram"
//     console.log(`Inner let ${a}`)
// }
// console.log(`Outer let ${a}`)

// {
//     console.log(`GIVES ERROR: Inner let ${b}`)
//     let b = "Jai Ram"
//     console.log(`Inner let ${b}`)
// }
//console.log(`Error: Outer let ${b}`)


// function fun1()
// {
//     var name = "Ram Bhakt"
//     console.log(name)
// }

// fun1()


var name = "Jai Shri Ram"
function fun1()
{
    console.log(name)
    hello = "Hanuman Ji"
    console.log(`Auto Global Concept: ${hello}`)
}

fun1()
console.log(name)