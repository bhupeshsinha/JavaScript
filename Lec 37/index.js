console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")


//Event Handler
// const btn = document.getElementById('btn');
// btn.onclick = () => {
//     console.log('Jai Siya Ram from js file')
// }

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log('Jai Siya Ram from js file, using event listener: NORMAL FUNCTION')
})

btn.addEventListener('click', () => {
    console.log('Jai Siya Ram from js file, using event listener: ARROW FUNCTION')
})