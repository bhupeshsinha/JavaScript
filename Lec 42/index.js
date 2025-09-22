// let p = new Promise(function (res, rej){
//     res("PROMISE RESOLVED.");
// });

// p.then((data)=>{
//     console.log(data)
// })


// CONVERTING CALLBACK() to PROMISE

// function searchFood(item, cb1) {
//     console.log(`Please wait! \nWe are Searching for ${item}...`);
//     setTimeout(function timer1() {
//         let data = `\nList of ${item}`;
//         cb1(item, data);
//     }, 3000);
// }

// searchFood("Biryani", function (item, data){
//     console.log(item, data);
// });


function searchFood(item){
    return new Promise(function fun1(res, rej){
            console.log(`Please wait! \nWe are Searching for ${item}...`);
            setTimeout(function timer1() {
                let data = `\nList of ${item}`;
                res(data);
            }, 3000);
    });
}


function orderFood(item) {
    return new Promise(function (res, rej){
        console.log(`Select ${item}`);
        setTimeout(function timer2() {
            let orderId = Math.floor(Math.random() * 999999);
            res(orderId);
        }, 4000);
    });
    
}


searchFood("BIRYANI")
    .then(function onSuccess(data){
    console.log(data);
    return orderFood("BIRYANI");
    })
    .then(function onSuccess(data){
    console.log(data)
});

// let p = new Promise(function(resolve, reject){
//     resolve("JAI SIYA RAM");
// })

// p.then((data) => {
//     console.log(data);
// })