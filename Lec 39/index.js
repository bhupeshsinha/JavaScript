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



// setInterval(function hello(){
//     console.log("I am the Best")
// }, 2000);

// function bgChange(){
//     const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

//     document.body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;

// }
// setInterval(bgChange, 2000);

// function bgChange() {
//     const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);

//     document.body.style.background = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${randomColor1}, ${randomColor2}, ${randomColor3})`;
//     document.body.style.transition = "background 1.5s ease-in-out";
// }
// setInterval(bgChange, 2000);


// function bgChange() {
//     const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

//     document.body.style.background = `
//         repeating-linear-gradient(
//             45deg, 
//             ${randomColor1}, 
//             ${randomColor1} 10px, 
//             ${randomColor2} 10px, 
//             ${randomColor2} 20px
//         )`;
//     document.body.style.transition = "background 1s ease-in-out";
// }
// setInterval(bgChange, 2000);


// function bgChange() {
//     const colors = Array.from({ length: 5 }, () => "#" + Math.floor(Math.random() * 16777215).toString(16)).join(", ");
//     document.body.style.background = `linear-gradient(270deg, ${colors})`;
//     document.body.style.backgroundSize = "1000% 1000%";
//     document.body.style.animation = "aurora 10s ease infinite";
// }

// // Aurora animation keyframes
// const style = document.createElement('style');
// style.innerHTML = `
// @keyframes aurora {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
// }`;
// document.head.appendChild(style);

// setInterval(bgChange, 2000);

// function bgChange(){
//     let color = "";
//     let colorString = "0123456789abcdef";
//     for(let i =0;i<6;i++){
//         let randNum = Math.floor(Math.random()*colorString.length)
//         color = color + colorString[randNum]
//     }

//     document.body.style.background = `#${color}`

// }
// setInterval(bgChange, 0);

// setTimeout(function(){
//     console.log("Hello! good Morning!")
// }, 2000)

// console.log("Step 1")

// setTimeout(function(){
//     console.log("Step2: Hello! good Morning!")
// }, 2000)

// console.log("Step 3")



//Closure = function + the variables it remembers from where it was created.
// A function carries a "backpack 🎒" of the variables from the environment where it was created.


// A closure in JavaScript is the combination of a function and the lexical environment within which that function was declared. This means that an inner function, defined within an outer function, retains access to the outer function's variables and parameters, even after the outer function has finished executing. 



// function fun1(text){
//     console.log("Starting Fun");
//     console.log(text);
//     setTimeout(()=>{
//         console.log(text)
//     }, 4000);
//     console.log("Ending Fun");
//     console.log(text);
    
//     text="Hare Krishna";
//     console.log(text);
// }

// fun1("Jai Siya Ram");

// function fun1(){
//     for(var i=0;i<5;i++){
//         setTimeout(function hello(){
//             const a = i;
//             console.log(a);
//         }, i*1000);
//     }
// }

// function fun1(){
//     for(var i=0;i<5;i++){
//         function inner(i){
//             setTimeout(function hello(){
//                 const a = i;
//                 console.log(a);
//             }, i*2000);
//         }
//         inner(i);
//     }
// }

// function fun1(){
//     for(var i=0;i<5;i++){

//         let a = i;

//         setTimeout(function hello(){
            
//             console.log(a);
//         }, i*1000);
//     }
// }

// fun1()

console.log("Step 1")

setTimeout(function(){
    console.log("Step2: Hello! good Morning! SET  TIMEOUT 1")
}, 8000)


setTimeout(function(){
    console.log("Step2: Hello! good Morning! SET  TIMEOUT 2")
}, 5000)


setTimeout(function(){
    console.log("Step2: Hello! good Morning! SET  TIMEOUT 3")
}, 3000)
console.log("Step 3")