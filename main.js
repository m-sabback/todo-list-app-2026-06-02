function getUserValue(){
    const userValue = document.querySelector('.input');
    let value = ''
    if(userValue.value !== ''  ){
        value = userValue.value
        userValue.value = ''
        return
    }else{
        const removeEvent = document.querySelector('.del-btn')
        removeEvent.removeEventListener('click', deleteTask)
        return
    }
    
    return value
}

function createTodo(){
    const rootElem = document.getElementById("root")

    const todo = document.createElement("div");
    const deleteBtn = document.createElement('button');

    todo.classList.add('todo')
    deleteBtn.classList.add('del-btn')
    deleteBtn.textContent = "Delete Task"
    todo.textContent = getUserValue()
    
    deleteBtn.addEventListener('click', deleteTask)
    todo.appendChild(deleteBtn)
    rootElem.appendChild(todo)
    
}

function deleteTask(){
    this.parentElement.remove()
    
}