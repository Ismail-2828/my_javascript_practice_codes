
let todoList = JSON.parse(localStorage.getItem('todo_items')) || [];

window.onload = function () {
    rendertodoList();
}

function todo(){
    let todoInput = document.querySelector('.js_todoInput').value;
    let dueDate = document.querySelector('.js_dueDate').value;
    todoList.push({
        'name':todoInput,
        'dueDate': dueDate});
        localStorage.setItem('todo_items',JSON.stringify(todoList));
    rendertodoList();
}

function rendertodoList(){
    todo_name = '';
    for(i=0; i<todoList.length; i++){
        todo_name += 
       `<div class="todo_item_length">${todoList[i]['name']}</div>
       <div class='todo_date_length'>${todoList[i]['dueDate']}</div>
       <button class=" delete_button" onclick="
        deleteButton(${i});
        ">
        Delete
        </button>`;
    }
    document.querySelector('.js_moves').innerHTML= todo_name;
}

function deleteButton(index) {
      todoList.splice(index,1);
      localStorage.setItem('todo_items',JSON.stringify(todoList));
      rendertodoList();
}

