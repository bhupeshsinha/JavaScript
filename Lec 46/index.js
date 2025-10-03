
// async function api(){
//     console.log("Jai Siya Ram");
//     let response = await fetch("https://apicodethread.cyclic.app");
//     let result = await response.json();
//     console.log(result)
// }

// api()


// ==========================================================================================

// async function api(){
//     console.log("Jai Siya Ram");
//     let response = fetch("https://apicodethread.cyclic.app")
//         .then((data) => {
//             return data.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
// }

// api()

// ===========================================================================================





async function api(num1, num2){
    try{
        console.log("Jai Siya Ram");
        // let response = await fetch(`https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`);
        // let result = await response.json();
        result = Number(num1)+Number(num2);
        document.getElementById("total").innerHTML = result
        // console.log(result)
    }catch(err){
        console.log("Error Occured: ", err);
    }
}



document.getElementById("btn").addEventListener('click', ()=>{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    api(num1, num2);
})