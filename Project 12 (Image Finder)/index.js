
const ACCESS_TOKEN = 'jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4';

let keyword = document.getElementById('keyword');

document.getElementById('btn').addEventListener('click', ()=>{
    document.getElementById('allImg').innerHTML = '';
    let val = keyword.value;
    fetchImg(val);
}) 


async function fetchImg(val) {
    //API:  https://api.unsplash.com/search/photos?query=shoes&client_id=jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOKEN}`);
    let result = await response.json();
    displayImg(result);
}


function displayImg(res){
    // console.log(keyword.value);
    res.results.map(data => {
        let div = document.createElement('div');
        div.setAttribute('class', 'singleImg');

        div.innerHTML = `
                <div class="firstDiv">
                    <img src=${data.user.profile_image.large} alt="" class="userImg">
                    <p class="userName">${data.user.name}</p>
                </div>
                <div class="secondDiv">
                    <img src=${data.urls.regular} alt="" class="mainImg">
                    <p class="imgDes">${data.alt_description}</p>
                </div>
        `;
        // console.log(div);
        document.getElementById('allImg').appendChild(div);
    })    
}