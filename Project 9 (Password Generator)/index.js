console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")

// const genPass = document.querySelector("#genPass")
const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");
const upprCase = document.getElementById("capLet");
const lowerCase = document.getElementById("samLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");

rangeVal.innerText = slider.value;
slider.addEventListener('input', ()=>{
    rangeVal.innerText = slider.value;
    // rangeVal.innerText = e.target.value;
});

btn.addEventListener('click', ()=>{
    // alert("Jai Siya Ram")1
    
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolsStr = '~`!@#$%^&*()_+][}{';

    // let finalStr = capitalLetter + smallLetter + numberStr + symbolsStr;
    let finalStr = '';

    if(upprCase.checked){
        finalStr+=capitalLetter;
    }

    if(lowerCase.checked){
        finalStr+=smallLetter;
    }

    if(number.checked){
        finalStr+=numberStr;
    }

    if(symbol.checked){
        finalStr+=symbolsStr;
    }

    if(finalStr === ''){
        alert("Please Select Atleast One Option");
    }

    let latestPass = '';

    for(let i=0;i<slider.value;i++){

        let randNum = Math.floor(Math.random()*finalStr.length);
        latestPass+=finalStr.charAt(randNum);
    }

    newPass.innerText=`${latestPass}`;
  
});

    copyBtn.addEventListener('click', ()=>{
        console.log("Password Copied!")
        // alert("Password Copied!")
        window.navigator.clipboard.writeText(newPass.innerText);
    });