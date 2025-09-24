// function fun1(){
//     return ("Ekdum Bdiya Company me place honga me!")
// };

// console.log(fun1());


// async function fun1(){
//     return ("Ekdum Bdiya Company me place honga me!")
// };

// console.log(fun1());

// function fun2(){
//     return Promise.resolve("Ekdum Bdiya Company me place honga me!")
// };
// console.log(fun2());

// function fun3(){
//     return new Promise(function (resolve, reject){
//         resolve("Ekdum Bdiya Company me place honga me!");
//     })
// }

// console.log(fun3())

//1st way to write ASYNC
async function fun1(){
    return ("Ekdum Bdiya Company me place honga me!")
};

fun1().then((data)=>{
    console.log(data);
})


//2nd way to write ASYNC
function fun2(){
    return Promise.resolve("Ekdum Bdiya Company me place honga me!")
};
fun2().then((data)=>{
    console.log(data);
});

//3rd way to write ASYNC
function fun3(){
    return new Promise(function (resolve, reject){
        resolve("Ekdum Bdiya Company me place honga me!");
    })
}

fun3().then((data)=>{
    console.log(data);
})