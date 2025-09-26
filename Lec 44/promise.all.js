
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
            // res("API2");
            rej("REJECTED: API2")
        }, 7000);
    })
}


let API3 = new Promise((res, rej) => {
        setTimeout(()=>{
            res("API3");
        }, 2000);
    })



let x = Promise.all([API1(),API2(),API3])
.then((data)=>{
    console.log(data)
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
})
.catch((err) => {
    console.error(err);
});