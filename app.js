function onReady() {
  let toDos = [];

  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
     title: newToDoText.value,
     complete: false
   });

    newToDoText.value = '';

    renderTheUI();
   }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li')
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
    });

    const addToDoForm = document.getElementById('addToDoForm');
    const toDoList = document.getElementById('toDoList');
}

window.onload = function() {
  onReady();
};
