console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

// var num1=2;
// var num2=5;

// function add(a,b)
// {
//     var total = a+b;
//     return total;
// }

// var sum = add(num1, num2)
// console.log(sum)

function one()
{
    var a= "hello1";
    console.log("Inside One")

    function two()
    {
        let b = "hello2";
        console.log("Inside Two");

        function three()
        {
            let c = "hello3";
            console.log("Inside Three");
        }
        three();
    }
    two();
}

one()