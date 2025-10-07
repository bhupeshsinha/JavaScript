
function API1(){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("API1");
        }, 5000);
        
    })
}


function API2(){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("API2");
        }, 7000);
    })
}


function API3(){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("API3");
        }, 2000);
    })
}



API1().then((data)=>{
    console.log(data)
})


API2().then((data)=>{
    console.log(data)
})


API3().then((data)=>{
    console.log(data)
})