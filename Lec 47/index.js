// document.getElementById("btn").addEventListener('click', ()=>{
//     sessionStorage.setItem("store", "Jai Siya Ram")
// })


// document.getElementById("btn").addEventListener('click', ()=>{
//     localStorage.setItem("store", "Jai Siya Ram")
// })


// document.getElementById("btn").addEventListener('click', ()=>{
//     let data = localStorage.getItem("store")
//     console.log(data)
// })

// document.getElementById("btn").addEventListener('click', ()=>{
//     localStorage.clear()
   
// })

// document.getElementById("in").addEventListener('input', (e)=>{
// //    console.log(e.target.value);
//     localStorage.setItem('data', e.target.value);
//     document.getElementById('h1').innerText = localStorage.getItem('data');
// })
// document.getElementById('h1').innerText = localStorage.getItem('data'); 


// document.getElementById("btn").addEventListener('click', (e)=>{
// //    console.log(e.target.value);
//     localStorage.setItem('data', {name: "Ram Doot", rollNo: 143});
//     localStorage.setItem('data', JSON.stringify({name: "Ram Doot", rollNo: 143}));
//     localStorage.setItem('data', JSON.stringify({name: "Janani Main Ram Doot Hanuman", rollNo: 143143}));
//     document.getElementById('h1').innerText = localStorage.getItem('data');
// })
// document.getElementById('h1').innerText = localStorage.getItem('data'); 


// console.log({name: "Ram Doot", rollNo: 143})
// console.log(String({name: "Ram Doot", rollNo: 143}))
// console.log(JSON.stringify({name: "Janani Main Ram Doot Hanuman", rollNo: 143143}))

// document.getElementById("btn").addEventListener('click', (e)=>{
// //    console.log(e.target.value);
//     localStorage.setItem('data', {name: "Ram Doot", rollNo: 143});
//     localStorage.setItem('data', JSON.stringify({name: "Ram Doot", rollNo: 143}));
//     localStorage.setItem('data', JSON.stringify({name: "Janani Main Ram Doot Hanuman", rollNo: 143143}));
//     let data = JSON.parse(localStorage.getItem('data'));

//     document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo;
//     document.getElementById('h1').innerText = data.name
// })
// document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name;
// document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo;


document.getElementById("btn").addEventListener('click', (e)=>{
    let name= document.getElementById('name').value;
    let rollNo= document.getElementById('rollNo').value;

    localStorage.setItem('data', {name: "Ram Doot", rollNo: 143});
    localStorage.setItem('data', JSON.stringify({name: name, rollNo: rollNo}));

    let data = JSON.parse(localStorage.getItem('data'));

    document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo;
    document.getElementById('h1').innerText = data.name
})


document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name;
document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo;

