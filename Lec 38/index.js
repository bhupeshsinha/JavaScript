console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

// const mainDiv = document.getElementById("mainDiv")
// const box = document.getElementById("div1")
// console.log(box)

// box.addEventListener('click', ()=>{
//     console.log("BOX")
//     // box.style.backgroundColor='red'
// },true)



// mainDiv.addEventListener('click', ()=>{
//     console.log("Main Div")
//     // box.style.backgroundColor='red'
// },true)


// document.body.addEventListener('click', ()=>{
//     console.log("Body")
// },true)

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const items = document.getElementsByClassName("item")

for(let item of items){
    item.addEventListener('dragstart', (e)=>{
        console.log(e.target)
        box2.addEventListener('dragover', (e)=>{
            e.preventDefault();
            e.stopPropagation();
        })

        box2.addEventListener("drop",()=>{
            box2.append(e.target);
        })
    })
}