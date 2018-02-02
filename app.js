function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
    addToDoForm.addEventListener('submit', event => {
       event.preventDefault();
       let title = newToDoText.value;
       let newLi = document.createElement('li');
       let checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       let del = document.createElement("button");
       del.innerHTML = "Delete";
       newLi.textContent = title;
       newLi.appendChild(checkbox);
       newLi.appendChild(del);
       toDoList.appendChild(newLi);
       newToDoText.value = '';

       del.addEventListener("click", function() {
        toDoList.removeChild(newLi)
       });
     });


}

window.onload = function() {
 onReady();
};
