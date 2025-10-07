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
// async function fun1(){
//     return ("Ekdum Bdiya Company me place honga me!")
// };

// fun1().then((data)=>{
//     console.log(data);
// })


// //2nd way to write ASYNC
// function fun2(){
//     return Promise.resolve("Ekdum Bdiya Company me place honga me!")
// };
// fun2().then((data)=>{
//     console.log(data);
// });

// //3rd way to write ASYNC
// function fun3(){
//     return new Promise(function (resolve, reject){
//         resolve("Ekdum Bdiya Company me place honga me!");
//     })
// }

// fun3().then((data)=>{
//     console.log(data);
// })

// function pro(){
//     return new Promise(function (res, rej){
//         res("Ekdum Bdiya Company me place honga me!");
//     });
// }

// async function fun1(){
//     let x = await pro();
//     console.log(x);
//     return "Msg From Async-Await.";
// };

// fun1().then((data)=>{
//     console.log("Msg At fun1, from Async-Await: ", data);
// })


// function pro(){
//     return new Promise(function (res, rej){
//         setTimeout(() => {
//             res("Ekdum Bdiya Company me place honga me!");
//         }, 10000);
//     });
// }

// async function fun1(){
//     console.log("START");
//     let x = await pro();
//     console.log("END");
//     console.log(x);
//     return "Msg From Async-Await.";
// };

// fun1().then((data)=>{
//     console.log("Msg At fun1, from Async-Await: ", data);
// })

function searchFood(item){
    return new Promise(function fun1(resolve, reject){
        console.log("Searching start for ", item, "...");
        setTimeout(function timer1(){
            let data = `List of ${item} \n1. \n2. \n3.`;
            // resolve([item, data]);
            resolve({item, data});
        }, 3000)
    });
}

function orderFood(item){
    return new Promise(function fun2(resolve, reject){
        console.log("Select :", item);
        setTimeout(function timer2(){
           let id = Math.floor(Math.random() * 999999);
           console.log(`Order ID for ${item} is`, id)
           resolve({id, item});
        }, 4000);
    });
}

function payment(item, id){
    return new Promise(function fun3(resolve, reject){
        console.log(`Payment started for item ${item} with id number: `, id);
        setTimeout(function timer3(){
            let status = true;
                console.log(`Current Status id: ${status}`);
            resolve(status);
        }, 6000);
    });
}


async function foodOrder(item){
    let res1 = await searchFood(item);
    console.log(res1.item);
    console.log(res1.data);
    let res2 = await orderFood(res1.item);
    let res3 = await payment(res2.item, res2.id);
}

foodOrder("Tandoori Chicken");


// searchFood("Chicken Biryani")
//     .then(function onResolve(detail){
//         console.log(detail.data);    
//         return orderFood(detail.item);
//     })  
//     .then(function consume2(id){
//         console.log(`Order ID for ${id.item} is`, id.id)
//         return payment(id.item, id.id);
//     })
//     .then(function consume3(status){
//             console.log(`Current Status id: ${status}`);
//     })

