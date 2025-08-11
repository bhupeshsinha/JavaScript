console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

const mainDiv = document.getElementById("mainDiv")
const box = document.getElementById("div1")
console.log(box)

box.addEventListener('click', ()=>{
    console.log("BOX")
    // box.style.backgroundColor='red'
},true)



mainDiv.addEventListener('click', ()=>{
    console.log("Main Div")
    // box.style.backgroundColor='red'
},true)


document.body.addEventListener('click', ()=>{
    console.log("Body")
},true)