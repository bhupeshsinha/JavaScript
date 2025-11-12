let todoInput = document.getElementById('todoInput');

{
// let id = 1;

// function removeTodo(id){
//     console.log("To do removed");
//     console.log(id);
//     let toDelete = document.getElementById(id);
//     toDelete.remove();
// }

// function markTodo(id){
//     // console.log("To do marked");
//     // let toMark = document.getElementById(id);
//     // toMark.children[0].style.textDecoration = "line-through";
//     // alert("Task Marked Successfully");

//     let div = document.getElementById(id);
//     div.children[0].classList.toggle('completed');
// }


// document.getElementById('addBtn').addEventListener('click', (e)=>{
//     e.preventDefault();
//     let todoVal = todoInput.value;
//     console.log(todoVal);
//     let div = document.createElement('div');
//     div.setAttribute('class', 'singleTodo');
//     // div.setAttribute("id", id++);
//     div.setAttribute("id", id);
//     div.innerHTML = `
//                 <h2 id="taskToDo">${todoVal}</h2>
//                 <input type="checkbox" name="" id="" onclick = markTodo(${id}) >
//                 <button onclick = removeTodo(${id}) >Remove Task</button>
//             `;
//     console.log(div);
//     document.getElementById('allTodo').appendChild(div);
//     id++;
//     todoInput.value = '';
// });
}

let arr = []

document.getElementById('addBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    let todoVal = todoInput.value;

    arr.push(todoVal);

    console.log(todoVal);
    let div = document.createElement('div');
    div.setAttribute('class', 'singleTodo');
    // div.setAttribute("id", id++);
    // div.setAttribute("id", id);
    div.innerHTML = `
                <h2 id="taskToDo">${todoVal}</h2>
                <input type="checkbox" name="" id="">
                <button >Remove Task</button>
            `;

    let btn = div.getElementsByTagName('button');
    let inp = div.getElementsByTagName('input');

    btn[0].addEventListener('click', (e)=>{{
        e.target.parentNode.remove();
    }});

    inp[0].addEventListener('click', (e)=>{
        e.target.previousElementSibling.classList.toggle('completed');
    });

    document.getElementById('allTodo').appendChild(div);

    localStorage.setItem('allTodo', JSON.stringify(arr));

    todoInput.value = '';
});
