
// const SearchBtn = document.getElementById("btn");
// const inputField = document.getElementById("inputField")

// SearchBtn.addEventListener('click', ()=>{
//     console.log(inputField.value);
// })

let user = document.getElementById('userID');

async function fetchUser(userId) {
    let response = await fetch(`https://api.github.com/users/${userId}`);
    let result = await response.json();
    console.log(result);
}


document.getElementById('btn').addEventListener('click', ()=>{
    let userId = user.value
    fetchUser(userId);
})

// GITHUB API:  https://api.github.com/users/userId