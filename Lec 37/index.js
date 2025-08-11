console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")


//Event Handler
// const btn = document.getElementById('btn');
// btn.onclick = () => {
//     console.log('Jai Siya Ram from js file')
// }

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     console.log('Jai Siya Ram from js file, using event listener: NORMAL FUNCTION')
// })

// btn.addEventListener('click', () => {
//     console.log('Jai Siya Ram from js file, using event listener: ARROW FUNCTION')
// })


// const btn = document.getElementById('btn');


// btn.addEventListener('click', (eventObject) => {
//     console.log(eventObject.target.type)
//     console.log('Jai Siya Ram from js file, using event listener: ARROW FUNCTION')
// })


// const btn = document.getElementById('btn');


// btn.addEventListener('click', (e) => {
//     // e.target.innerText="change"
//     console.log(e.target)
//     console.log('Jai Siya Ram from js file, using event listener: ARROW FUNCTION')
// })


// const body = document.querySelector("body")
// const btn = document.getElementById('btn');


// btn.addEventListener('click', (e) => {
//     // e.target.innerText="change"
//     // alert("Jai Ram Jai Ram")

//     if(confirm("Color Change ?"))
//     {
//         const colorName = prompt("Which Colour?")
//         console.log(colorName)
//         body.style.backgroundColor = colorName
//         console.log(e.target)
//     }

//     console.log('Jai Siya Ram from js file, using event listener: ARROW FUNCTION')
// })


// const submit = document.getElementById("submit")
// const colorName = document.getElementById("colorName")
// const body = document.querySelector("body")

// submit.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log(colorName.value)
//     body.style.backgroundColor = colorName.value
//     // console.log(e)

// })


// const btn = document.querySelector("#btn");
// // const body = document.querySelector("body")
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   console.log(rndCol)
//   document.body.style.backgroundColor = rndCol;
// });


const colorName = document.getElementById("colorName")
const textBox = document.getElementById("textBox")

colorName.addEventListener('input',(e)=>{
    e.preventDefault()
    textBox.value = colorName.value
    const p = document.createElement("p")
    p.innerHTML = colorName.value
    document.body.appendChild(p)
    document.getElementById("pTag").innerText = colorName.value
})
