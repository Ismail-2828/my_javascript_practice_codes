
let todoList = [];
function todo(){
    let todoInput = document.querySelector('.js_todoInput').value;
    let dueDate = document.querySelector('.js_dueDate').value;
    todoList.push({
        'name':todoInput,
        'dueDate': dueDate});
    rendertodoList();
}

function rendertodoList(){
    todo_name = '';
    todoList.forEach(function(todoItem,i) {
        todo_name += 
       `<div class="todo_item_length">${todoItem['name']}</div>
       <div class='todo_date_length'>${todoItem['dueDate']}</div>
       <button class="js_delete_button delete_button">
        Delete
        </button>`;
        
    })
    document.querySelector('.js_moves').innerHTML= todo_name;
    
    document.querySelectorAll('.js_delete_button').forEach((delButton,i) => {
    delButton.addEventListener('click',() => {
        deleteButton(i);
    });
    
});

    
}


function deleteButton(index) {
      todoList.splice(index,1);
      rendertodoList();
}

document.querySelector('.js_AddButton').addEventListener('click', function(){
    todo();
})

