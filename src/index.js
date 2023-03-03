import './css/style.css';
import Task from './components/Task';

const tasks = [];

// toggle visiblity
const hideForm = () => {
  const newTaskForm = document.querySelector('.new-task-form');
  newTaskForm.classList.toggle('hidden');
};

const addTask = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').innerText;

  const task = new Task(title, description, 'tomorrow', 'low');
  tasks.push(task);
};

const newTask = document.getElementById('new-task');
newTask.addEventListener('click', hideForm);

const generateTaskMarkup = (task) => {
  const taskDiv = document.createElement('div');
  taskDiv.textContent = task.title;
  return taskDiv;
};

const showTaskList = () => {
  const tasksList = tasks.map((task) => generateTaskMarkup(task));
  const list = document.querySelector('.task-list');
  list.replaceChildren(...tasksList);
};

const submitTask = document.getElementById('add-task');
submitTask.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
  hideForm();
  showTaskList();
});
