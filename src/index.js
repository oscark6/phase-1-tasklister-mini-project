document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const selectForm = document.querySelector('form');

  selectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = e.target.querySelector('#new-task-description').value

    handleToDo(description);

    selectForm.reset();
  })
});

  function handleToDo(description){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = description;

    deleteButton.textContent = 'x';



    li.appendChild(deleteButton);

    document.querySelector('#tasks').appendChild(li);


    deleteButton.addEventListener('click', handleDelete);
  }

  function handleDelete(e){

    e.target.parentNode.remove();
  }