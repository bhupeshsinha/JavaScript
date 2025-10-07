console.log("**************")
console.log("Jai Siya Ram")
console.log("**************")


// const heading = document.getElementById('heading')
// console.log(heading)
// console.log(heading.innerText)

// heading.innerText = "Mere Shri Ram"
// console.log(heading.innerText)


// const heading = document.getElementsByTagName('h1')
// // heading.innerText = "Mere Shri Ram"
// console.log(heading[0].innerText)


// let arr = [20,40,60,80,100];
// console.log(arr)


// const heading = document.getElementsByClassName('heelo')
// // heading.innerText = "Mere Shri Ram"
// console.log(heading)

// const heading = document.getElementsByClassName('heelo')
// // heading.innerText = "Mere Shri Ram"
// console.log(heading[0].innerHTML)
// console.log(heading[0].innerText)
// console.log(heading[0].textContent)


// const heading = document.querySelector("h1")
// console.log(heading)

// const heading2 = document.querySelectorAll("h1")
// console.log(heading2)

// const heading = document.querySelector("h1")
// heading.style.backgroundColor = "orange"
// heading.style.border = "2px solid red"
// heading.style.borderRadius = "5px"


// const heading = document.querySelector("h1")
// heading.setAttribute("class","heelo3")
// heading.setAttribute("style", "background-color:orange")
//heading.removeAttribute("class")
//heading.removeAttribute("id")


// const newTag = document.createElement("p");
// newTag.setAttribute("id", "para")
// newTag.innerText="Jananani mai Ram doot hanuman"

// const body = document.getElementsByTagName("body")
// body[0].append(newTag)
// // document.append(newTag)
// console.log(newTag)


let data = ["Ram", "Shri Ram", "Jai Jai Ram", "Hanuman", "Mahaveer Hauman", "Brahmandnayak"]
const ul = document.getElementById("specs")

for(let i=0;i<data.length;i++)
{
    const liTag = document.createElement("li"); //will create list inside ul

    liTag.style.backgroundColor="orange"
    liTag.style.margin="2px"
    liTag.style.color = "white"
    liTag.style.borderRadius = "4px"
    liTag.style.textAlign = "center"
    liTag.innerText = data[i];

    ul.append(liTag)
}