// document.getElementById("btn").addEventListener('click', ()=>{
//     sessionStorage.setItem("store", "Jai Siya Ram")
// })


// document.getElementById("btn").addEventListener('click', ()=>{
//     localStorage.setItem("store", "Jai Siya Ram")
// })


document.getElementById("btn").addEventListener('click', ()=>{
    let data = localStorage.getItem("store")
    console.log(data)
})