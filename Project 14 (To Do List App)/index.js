let todoInput = document.getElementById('todoInput');

function removeTodo(){
    console.log("To do removed");
}

document.getElementById('addBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    let todoVal = todoInput.value;
    console.log(todoVal);
    let div = document.createElement('div');
    div.setAttribute('class', 'singleTodo');
    div.innerHTML = `
                <h2 id="taskToDo">${todoVal}</h2>
                <input type="checkbox" name="" id="">
                <button onclick = removeTodo() >Remove Task</button>
            `;
    console.log(div);
    document.getElementById('allTodo').appendChild(div);
    todoInput.value = '';
});
