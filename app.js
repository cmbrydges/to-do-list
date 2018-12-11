  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

addToDoForm.addEventListener("submit", event => {
  event.preventDefault();
  let title = newToDoText.value;
  let newLi = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLi.textContent = title;
  newLi.appendChild(checkbox);
  let deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = '<span id =deleteButton">Delete</span>';
  newLi.appendChild(deleteButton);
  toDoList.appendChild(newLi);
  });

  // Removes the element next to the delete button from the document
  let deleteButton = document.getElementById('deleteButton');
  deleteButton.addEventListener('click', event => {
  var newLi = document.getElementById('li');
  toDoList.removeChild('li');
});
