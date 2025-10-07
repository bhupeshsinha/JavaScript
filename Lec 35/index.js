console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

// let a = 2;
// let b = "4"  //Treated As String: Implicitily


// console.log(typeof(a))
// console.log(typeof(b))
// console.log(a+b)
// console.log(typeof(a+b))


// let a = 2;
// let b = Number("4");    //Treated As Number: Explicitily


// console.log(typeof(a))
// console.log(typeof(b))
// console.log(a+b)
// console.log(typeof(a+b))

// console.log(3)
// console.log(3+9)
// console.log(3+9+"10")
// console.log(3+9+"10"+100)
// console.log("10"+100+222)


// console.log(7+null)
// console.log("7"+null)
// console.log(7+true)
// console.log(5-"56")
// console.log("Jai Ram"-10)
// console.log({}-5)
// console.log([]-5)
// console.log(5-undefined)
// console.log("255"-5)
// console.log("0"-5)
// console.log("123.45"-5)
// console.log("12RAM"-5)
// console.log([]-5)
// console.log(""-5)
// console.log(5-true)
// console.log(5-false)
// console.log(null-true)
// console.log(null-false)
// console.log(Symbol("Ram")-5)


// Abstract Operation
// 1. ToPrimitive
// 2. ToBoolean
// 3. ToString 
// 4. ToNumber

// console.log(undefined-NaN)
// console.log(undefined-null)

// Subtraction: used ToNumber()
// Addition: Uses ToPrimitive() + ToString() + ToNumber()



// ToPrimitive()
console.log(5+{"a":10})