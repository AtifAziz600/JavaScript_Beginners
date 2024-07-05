const todoList = [];

function addTodo() {

    const inputElement = document.querySelector(".js-input-js");

    const todo = inputElement.value

    todoList.push(todo);
    console.log(todoList);
    inputElement.value = "";
}