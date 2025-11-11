let todoInput = document.getElementById('todoInput');

function removeTodo(id){
    console.log("To do removed");
    console.log(id);
    let toDelete = document.getElementById(id);
    toDelete.remove();
    alert("Task Removed Successfully");
}

let id = 1;

document.getElementById('addBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    let todoVal = todoInput.value;
    console.log(todoVal);
    let div = document.createElement('div');
    div.setAttribute('class', 'singleTodo');
    // div.setAttribute("id", id++);
    div.setAttribute("id", id);
    div.innerHTML = `
                <h2 id="taskToDo">${todoVal}</h2>
                <input type="checkbox" name="" id="">
                <button onclick = removeTodo(${id}) >Remove Task</button>
            `;
    console.log(div);
    document.getElementById('allTodo').appendChild(div);
    id++;
    todoInput.value = '';
});
