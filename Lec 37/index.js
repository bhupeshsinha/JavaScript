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


const body = document.querySelector("body")
const btn = document.getElementById('btn');


btn.addEventListener('click', (e) => {
    // e.target.innerText="change"
    // alert("Jai Ram Jai Ram")

    if(confirm("Color Change ?"))
    {
    body.style.backgroundColor = "orange"
    console.log(e.target)
    console.log('Jai Siya Ram from js file, using event listener: ARROW FUNCTION')
    }


})