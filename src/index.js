import './css/style.css';

// toggle visiblity
const hideForm = () => {
  const newTaskForm = document.querySelector('.new-task-form');
  newTaskForm.classList.toggle('hidden');
};

const newTask = document.getElementById('new-task');
newTask.addEventListener('click', hideForm);

const submitTask = document.getElementById('add-task');
submitTask.addEventListener('click', (e) => {
  e.preventDefault();
  hideForm();
});
