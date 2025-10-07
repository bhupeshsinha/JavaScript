
// function searchFood(item, cb1){
//     console.log(`Please wait! \nWe are Searching for ${item}...`);
//     setTimeout(function timer1(){
//         let data = `\nList of ${item}`;
//         // console.log(data);
//         cb1(item, data);
//     }, 3000);
// }


// function orderFood(item, cb2){
//     console.log(`Select ${item}`);
//     setTimeout(function timer2(){
//         let orderId = Math.floor(Math.random()*999999);
//         cb2(orderId);
//     }, 4000);
// }


// function payment(item, orderId, cb3){
//     console.log(`Payment Started for ${item} with Order Id ${orderId}. Please Wait`);
//     setTimeout(function timer3(){
//         let status = true;
//         cb3(status);
//     }, 6000);
// }


// let result = searchFood("Burger", function fun1(item, data){
//     console.log(data);
//     orderFood(item, function fun2(orderId){
//         console.log("\n\nYayy! Order Created Successfully! Your Order Id is",orderId);
//         payment(item, orderId, function fun3(response){
//             console.log(`Payment is Completed for Order Id ${orderId}. Status: ${response}`)
//         });
//     });
// });

function searchFood(item, cb1) {
    console.log(`Please wait! \nWe are Searching for ${item}...`);
    setTimeout(function timer1() {
        let data = `\nList of ${item}`;
        cb1(item, data);
    }, 3000);
}

function orderFood(item, cb2) {
    console.log(`Select ${item}`);
    setTimeout(function timer2() {
        let orderId = Math.floor(Math.random() * 999999);
        cb2(orderId);
    }, 4000);
}

function payment(item, orderId, cb3) {
    console.log(`Payment Started for ${item} with Order Id ${orderId}. Please Wait`);
    setTimeout(function timer3() {
        let status = true;
        cb3(status);
    }, 6000);
}

// new callback: delivery
function delivery(item, orderId, cb4) {
    console.log(`Delivery started for Order Id ${orderId}. Please wait...`);
    setTimeout(function timer4() {
        let delivered = true;
        cb4(delivered);
    }, 5000);
}

// new callback: feedback
function feedback(item, orderId, cb5) {
    console.log(`Asking feedback for Order Id ${orderId}...`);
    setTimeout(function timer5() {
        let rating = Math.floor(Math.random() * 5) + 1; // rating between 1–5
        cb5(rating);
    }, 2000);
}

// Nested callbacks (Callback Hell 👿)
searchFood("Burger", function fun1(item, data) {
    console.log(data);

    orderFood(item, function fun2(orderId) {
        console.log("\n\nYayy! Order Created Successfully! Your Order Id is", orderId);

        payment(item, orderId, function fun3(response) {
            console.log(`Payment is Completed for Order Id ${orderId}. Status: ${response}`);

            delivery(item, orderId, function fun4(delivered) {
                console.log(`Delivery for Order Id ${orderId}: ${delivered ? "Done ✅" : "Pending ❌"}`);

                feedback(item, orderId, function fun5(rating) {
                    console.log(`Thanks for your feedback! You rated your ${item} ⭐ ${rating}/5`);
                });
            });
        });
    });
});
