function onReady() {
  var toDos = [];
  const addTodoForm = document.getElementById('addToDoForm');
  var id = 0;

//delete button//
  var removeItem = document.createElement('button')
  removeItem.type = "button";
  removeItem.textContent = "Delete";

  localStorage.getItem(function() {
    if (value === null) { return; }
    toDos = JSON.parse(array);
  });

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    id++;
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    
    newToDoText.value = '';
    renderTheUI();
  }

//delete button only removes corresponding li//
  function deleteToDo(id) {
  toDos = toDos.filter(item => item.id !==id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      var removeItem = document.createElement('button')
      removeItem.type = "button";
      removeItem.textContent = "Remove";

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      newLi.appendChild(removeItem);

      removeItem.addEventListener('click', event => {
        deleteToDo(toDo.id);
        renderTheUI();
        //convert local array to strings//
        localStorage.setItem('array',(JSON.stringify(toDos)));
      });

      //toggle 'complete property' when box is checked//
      checkbox.addEventListener('CheckboxStateChange', event => {
        if (checkbox.checked === 'false') {
          toDo.complete = false;
        } else if (checkbox.checked === 'true') {
          toDo.complete = true;
        }

        console.log(toDos);
        //store to do entries locally//
        localStorage.setItem('array',(JSON.stringify(toDos)));
      });

    });

    addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();

      localStorage.setItem('array',(JSON.stringify(toDos)));
    });
  };

  renderTheUI();
}


window.onload = function() {
  onReady();
};
