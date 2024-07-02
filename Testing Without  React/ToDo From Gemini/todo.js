const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function() {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText.length === 0) {
    return; // Don't add empty tasks
  }

  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    listItem.classList.toggle('completed');
  });
  // listItem.appendChild(checkbox);

  const label = document.createElement('label');
  label.innerText = newTodoText;
  // listItem.appendChild(label);

  // todoList.appendChild(listItem);

  todoList.append(checkbox, label, listItem)

  newTodoInput.value = ''; // Clear the input field
});
