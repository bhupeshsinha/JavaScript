function searchFood(item){
    return new Promise(function fun1(resolve, reject){
        console.log("Searching start for ", item, "...");
        setTimeout(function timer1(){
            // let data = `List of ${item} \n1. \n2. \n3.`;
            // resolve([item, data]);
            
            // let data = undefined;
            let data = `List of ${item} \n1. \n2. \n3.`;
            if(data){
                resolve({item, data});
            }else{
                reject(new Error("LIST IS EMPTY"));
            }
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
            // let status = true;
            let status = false;
            if(status){
                resolve(status);
            }else{
                reject(new Error("PAYMENT STATUS: FAILED"))
            }
        }, 6000);
    });
}


searchFood("Chicken Biryani")
    .then(function onResolve(detail){
        console.log(detail.data);    
        return orderFood(detail.item);
    }, 
    // function onRejection(err){
    //     console.log(err)
    // }
    )  
    .then(function onResolve2(id){
        console.log(`Order ID for ${id.item} is`, id.id)
        return payment(id.item, id.id);
    })
    // .catch(
    //     function onRejection(err){
    //         console.log(err)
    // }
    // )
    .then(function onResolve3(status){
            console.log(`Current Status id: ${status}`);
    },   
    // function onRejection(err){
    //     console.log(err)
    // }

    )    
    .catch(
        function onRejection(err){
            console.log(err)
    }
    ) 