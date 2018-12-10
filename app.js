function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
}

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
  deleteButton.innerHTML = '<span>Delete</span>';
  newLi.appendChild(deleteButton);
  toDoList.appendChild(newLi);
});


  // Removes the last element from the document
 deleteButton.addEventListener("onClick", event => {
    event.preventDefault();
    function removeDeletedItem (lastElementAdded) {
    var lastElementAdded  = document.getElementById[listItems.length - 1];
    lastElementAdded.toDoList.removeChild(lastElementAdded)
  };
}
