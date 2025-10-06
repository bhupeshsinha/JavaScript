
// const SearchBtn = document.getElementById("btn");
// const inputField = document.getElementById("inputField")

// SearchBtn.addEventListener('click', ()=>{
//     console.log(inputField.value);
// })

let user = document.getElementById('userID');

async function fetchUser(userId) {
    let response = await fetch(`https://api.github.com/users/${userId}`);
    let result = await response.json();   
    displayUser(result);
}


document.getElementById('btn').addEventListener('click', ()=>{
    let userId = user.value
    fetchUser(userId);
})

function displayUser(result){
    const {
        avatar_url, 
        name, 
        bio, 
        followers, 
        following, 
        public_repos,
        html_url
    } = result;
    
    if(!avatar_url){
                document.getElementById('userProfile').innerHTML = `<h1>USER NOT FOUND</h1>`
                return;
    }

    if(!bio){
        bio = '';
    }
    document.getElementById('userProfile').innerHTML = 
        `           
                    <div class="userInfo">
                            <img src=${avatar_url} class="userImg" alt="">
                            <div class="userDetail">
                                <p class="userName">${name}</p>
                                <p class="userBio">${bio}</p>
                            </div>
                    </div>

                    <div class="userFollow">
                            <div class="Follower">
                                <div class="repo">
                                    <p>Follower</p>
                                    <p>${followers}</p>
                                </div>

                                <div class="repo">
                                    <p>Following</p>
                                    <p>${following}</p>
                                </div>

                                <div class="repo">
                                    <p>Repo</p>
                                    <p>${public_repos}</p>
                                </div>
                            </div>

                            <a href=${html_url} target='_blank' class="VisitProfile">
                                <div >
                                    Visit Profile
                                </div>                                
                            </a>


                    </div>
        `;
    


}

// GITHUB API:  https://api.github.com/users/userId