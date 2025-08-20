// console.log("Start");
// const promise1 = new Promise(function fun1(resolve, reject){
//     // console.log("Inside Promise: Promise is Sync Task");
//     // return "Inside Promise";

//     resolve("Promise RESOLVED / COMPLETED / FULL-FILLED");
//     // reject("Promise Rejected!");
// });
// console.log(promise1);
// console.log("End");


// const promise1 = new Promise(function fun1(resolve, reject){
//     reject("Promise Rejected /FAILED / INCOMPLETE");
//     resolve("Promise RESOLVED / COMPLETED / FULL-FILLED");
// });

// // promise1.then(function onSuccess(result){
// //     console.log(result);
// // });

// promise1.then(function onSuccess(result){
//     console.log(result);
// }, function onFailure(error){
//     console.log(error);
// });


// const promise1 = new Promise(function fun1(resolve, reject){
//     reject("Promise Rejected /FAILED / INCOMPLETE");
//     // resolve("Promise RESOLVED / COMPLETED / FULL-FILLED");
// })
// .then(function onSuccess(result){
//     console.log(result);
// }, function onFailure(error){
//     console.log(error);
// });

// function isData(item){
//     const promise1 = new Promise(function fun1(resolve, reject){
//         if(item){
//             console.log(item)
//             resolve("Promise RESOLVED / COMPLETED / FULL-FILLED");
//         }else{
//             reject("\nPromise Rejected /FAILED / INCOMPLETE");
//         }
//     });

//     return promise1;
// }

// let result = isData("Jai Siya Ram");

// result.then(function onSuccess(result){
//     console.log(result);
// });


function isData(item){
    const promise1 = new Promise(function fun1(resolve, reject){
        if(item){
            console.log(item)
            resolve("Promise RESOLVED / COMPLETED / FULL-FILLED");
        }else{
            reject("\nPromise Rejected /FAILED / INCOMPLETE");
        }
    });

    return promise1;
}

let result = isData("Jai Siya Ram");

result.then(function onSuccess(result){
    console.log(result);
});