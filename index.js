const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption=document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(event){
    event.preventDefault()
   const todoDiv=document.createElement('div');
   todoDiv.classList.add('todo');
   const  newTodo=document.createElement('li');
   newTodo.innerText=todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.append(newTodo);
   const completedButton = document.createElement('button')
   completedButton.innerHTML='<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn')
   todoDiv.append(completedButton);
   const trashButton = document.createElement('button')
   trashButton.innerHTML='<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn')
   todoDiv.append(trashButton);
   todoList.append(todoDiv);
   todoInput.value=""; //clears the input field after "submitting it"
} 

function deleteCheck(e){
    const item=e.target;

    if(item.classList[0]=== "trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        })
      
    }
 if(item.classList[0]==='complete-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed')
 }
}

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//       switch (e.target.value) {
//         case "all":
//           todo.style.display = "flex";
//           break;
//         case "completed":
//           if (todo.classList.contains("completed")) {
//             todo.style.display = "flex";
//           } else {
//             todo.style.display = "none";
//           }
//           break;
//         case "uncompleted":
//           if (!todo.classList.contains("completed")) {
//             todo.style.display = "flex";
//           } else {
//             todo.style.display = "none";
//           }
//       }
//     });
//   }

