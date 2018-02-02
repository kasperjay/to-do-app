function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const del = document.getElementById('del');
  addToDoForm.addEventListener('submit', event => {
       event.preventDefault();
       let title = newToDoText.value;
       let newLi = document.createElement('li');
       let checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       newLi.textContent = title;
       newLi.apppendChild(checkbox);
       toDoList.appendChild(newLi);

    del.addEventListener('submit', () => {
      toDoList.removeChild(newLi);
    }
     });

window.onload = function() {
  onReady();
};
