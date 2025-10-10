
const ACCESS_TOKEN = 'jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4';

let keyword = document.getElementById('keyword');
let val;
let page = 1;
document.getElementById('btn').addEventListener('click', ()=>{
    document.getElementById('allImg').innerHTML = '';
    val = keyword.value;
    keyword.value = '';
    page=1;
    fetchImg(val);
}) 


async function fetchImg(val) {
    //API:  https://api.unsplash.com/search/photos?query=shoes&client_id=jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4&page=1
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOKEN}&page=${page}`);
    let result = await response.json();

    if(result.results.length < 1){
        document.getElementById('allImg').innerHTML = '<h2>NOT FOUND, Please Enter A Valid Keyword</h2>'; 
        document.getElementById('loadMoreBtn').classList.remove('visible');
        document.getElementById('clearAllBtn').classList.remove('visible');
    }else{
        displayImg(result);
    }
}


function displayImg(res){
    // console.log(keyword.value);
    res.results.map(data => {
        let div = document.createElement('div');
        div.setAttribute('class', 'singleImg');

        // div.innerHTML = `
        //         <div class="firstDiv">
        //             <img src=${data.user.profile_image.large} alt="" class="userImg">
        //             <p class="userName">${data.user.name}</p>
        //         </div>
        //         <div class="secondDiv">
        //             <img src=${data.urls.regular} alt="" class="mainImg" onclick="window.open('${data.links.html}', '_blank')">
        //             <p class="imgDes">${data.alt_description}</p>
        //         </div>
        // `;

div.innerHTML = `
    <div class="firstDiv">
        <img src="${data.user.profile_image.large}" alt="${data.user.name}" class="userImg">
        <p class="userName">${data.user.name}</p>
    </div>
    <div class="secondDiv">
        <img src="${data.urls.regular}" alt="${data.alt_description || 'Image'}" class="mainImg" onclick="window.open('${data.links.html}', '_blank')">
        <p class="imgDes">${data.alt_description || 'No description'}</p>
        <div class="likes">
            <button class="like-btn">❤️ Like</button>
            <span class="like-count">${data.likes}</span>
        </div>
    </div>
`;



        // console.log(div);
        document.getElementById('allImg').appendChild(div);
    });
    
    document.getElementById('loadMoreBtn').classList.add('visible');
    document.getElementById('clearAllBtn').classList.add('visible');
}


document.getElementById('loadMoreBtn').addEventListener('click', ()=>{
    // document.getElementById('allImg').innerHTML = '';
    page++;
    fetchImg(val);
})

document.getElementById('clearAllBtn').addEventListener('click', ()=>{
    document.getElementById('allImg').innerHTML = '';
    document.getElementById('loadMoreBtn').classList.remove('visible');
    document.getElementById('clearAllBtn').classList.remove('visible');
    page = 1;
})