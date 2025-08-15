// Callback(): calling function inside another function

// function hello(para){
//     console.log("Inside Hello");
//     console.log(para)
//     para();
// }

// function cb(){
//     console.log("Inside CallBack Function");
// }

// hello(cb)

// hello(function cb(){
//     console.log("Callbacks")
// })

// hello(()=>{
//     console.log("Arrow Function + Callback Function")
// })

// function hello(text, para){
//     console.log("Inside Hello");
//     para(text);
// }

// hello("Hello", function cb(data){
//     console.log("Inside Callback", data);
// });

// function fun1(){
//     function fun2(){
//         console.log("Hello");
//     }
//     return fun2;
// }

// let res = fun1();
// console.log(res)
// res()

// function fun1(text){
//     function fun2(){
//         console.log(text);
//     }

//     return fun2
// }

// let res = fun1("From Fun1");
// res()



setInterval(function hello(){
    console.log("I am the Best")
}, 2000);