let todo_items = JSON.parse(localStorage.getItem('todo_items')) || [];

window.onload = function () {
    renderTodoTemplate();
}
function todo(){
    let inputTodo = document.querySelector('.js_inputItems').value;
    let inputDate = document.querySelector('.js_inputDate').value;
    todo_items.push({
        'items':inputTodo,
        'date':inputDate
    })
    localStorage.setItem('todo_items',JSON.stringify(todo_items));
    renderTodoTemplate();
}

function renderTodoTemplate(){
           todo_names = '';
todo_items.forEach( (value, index) => {
todo_names += `<div>${value['items']}</div><div>${value['date']}</div><button onclick="
deleteButton(${index})
">Delete</button>`
    
})
document.querySelector('.js_renderTodo').innerHTML = todo_names;
}

function deleteButton(i){
    todo_items.splice(i,1);
    localStorage.setItem('todo_items', JSON.stringify(todo_items));
    renderTodoTemplate();
} 
