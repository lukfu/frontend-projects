const todoList = [{name: 'a', dueDate:'2022-12-12'}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i=0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    /*const name = todoObject.name;*/
    /*const dueDate = todoObject.dueDate;*/
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class = "delete-todo-button">Delete</button>`;  /*generate html with `` */
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

/*
general JS process
1. save data
2. generate HTML
3. make it interactive
*/

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