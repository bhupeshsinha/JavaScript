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
            // let status = true;
            let status = false;
            if(status){
                resolve(status);
            }else{
                reject(new Error("SOME ERROR OCCURED DUE TO TECHNICAL ISSUE!!"));
            }
                // console.log(`Current Status id: ${status}`);
            // resolve(status);
        }, 6000);
    });
}


async function foodOrder(item){
    try{
        let res1 = await searchFood(item);
        console.log(res1.item);
        console.log(res1.data);
        let res2 = await orderFood(res1.item);
        let res3 = await payment(res2.item, res2.id);
    }catch(err){
        console.log(err);
    }finally{
        console.log("FINALLY block will always execute!");
    }
}

foodOrder("Tandoori Chicken");
