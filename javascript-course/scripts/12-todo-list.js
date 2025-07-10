const todoList = [{name: 'a', dueDate:'2022-12-12'}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-todo-button js-delete-todo-button">Delete</button>`;  /*generate html with `` */
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

/*
general JS process
1. save data
2. generate HTML
3. make it interactive
*/

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dateInputElement.value
  todoList.push({
    /*name: name, 
    dueDate: dueDate*/
    name,
    dueDate /*shorthand if name of variable and name of const is the same */
  });

  inputElement.value = '';

  renderTodoList();
}