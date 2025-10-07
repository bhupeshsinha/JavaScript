// // let p = new Promise(function (res, rej){
// //     res("PROMISE RESOLVED.");
// // });

// // p.then((data)=>{
// //     console.log(data)
// // })


// // CONVERTING CALLBACK() to PROMISE

// // function searchFood(item, cb1) {
// //     console.log(`Please wait! \nWe are Searching for ${item}...`);
// //     setTimeout(function timer1() {
// //         let data = `\nList of ${item}`;
// //         cb1(item, data);
// //     }, 3000);
// // }

// // searchFood("Biryani", function (item, data){
// //     console.log(item, data);
// // });


// function searchFood(item){
//     return new Promise(function fun1(res, rej){
//             console.log(`Please wait! \nWe are Searching for ${item}...`);
//             setTimeout(function timer1() {
//                 let data = `\nList of ${item}`;
//                 res(data);
//             }, 3000);
//     });
// }


// function orderFood(item) {
//     return new Promise(function (res, rej){
//         console.log(`Select ${item}`);
//         setTimeout(function timer2() {
//             let orderId = Math.floor(Math.random() * 999999);
//             res(orderId);
//         }, 4000);
//     });
    
// }


// searchFood("BIRYANI")
//     .then(function onSuccess(data){
//     console.log(data);
//     return orderFood("BIRYANI");
//     })
//     .then(function onSuccess(data){
//     console.log(data)
// });

// // let p = new Promise(function(resolve, reject){
// //     resolve("JAI SIYA RAM");
// // })

// // p.then((data) => {
// //     console.log(data);
// // })

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
            resolve({id, item});
        }, 4000);
    });
}

function payment(item, id){
    return new Promise(function fun3(resolve, reject){
        console.log(`Payment started for item ${item} with id number: `, id);
        setTimeout(function timer3(){
            let status = true;
            resolve(status);
        }, 6000);
    });
}

// searchFood("Chicken Biryani").then(function onResolve(item){
//     // console.log(item[0]);
//     // console.log(item[1]);
//     // console.log(item.item);
//     console.log(item.data);

//     orderFood(item.item).then(function consume2(id){
//         console.log(`Order ID for ${id.item} is ${id.id}`)
//         payment(item.item, id.id).then(function consume3(status){
//             console.log(`Current Status id: ${status}`);
//         })
//     });
    
// })

searchFood("Chicken Biryani")
    .then(function onResolve(detail){
        console.log(detail.data);    
        return orderFood(detail.item);
    })  
    .then(function consume2(id){
        console.log(`Order ID for ${id.item} is`, id.id)
        return payment(id.item, id.id);
    })
    .then(function consume3(status){
            console.log(`Current Status id: ${status}`);
    })