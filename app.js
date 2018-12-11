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
  deleteButton.innerHTML = 'Delete';
  deleteButton.id = "deleteButton";
  newLi.appendChild(deleteButton);
  toDoList.appendChild(newLi);
  });

document.addEventListener("click", function (e){
  if (e.srcElement.id === 'deleteButton'){
    e.srcElement.parentNode.remove();
  }
}); 
