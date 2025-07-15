console.log("Siya Ram")

// function sum(a,b,c)
// {
//     let total = a+b+c
//     console.log(total)
// }

function sum(a, ...num)    //REST Optr(...) is used: grouping of remaining elements as ARRAY, used for better readbility of code
{
    console.log(num)
    console.log(a)
    console.log(num[0])
    console.log(num[1])
    // console.log(num[2])

    console.log(`Total sum is: ${a + num[0] + num[1] }`)
}

sum(4,5,6)