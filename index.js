import { parseJSONFromLocalStorage } from "./utils/localStorage.js";
const taskList = document.querySelector(".wrapperMainGrid__tasks");

updateTaskList();
handleClickOnFilter();
handleClickOnActionButton();

function updateTaskList(filter) {
  clearTaskList();
  const taskItems = loadTasks(filter);
  taskList.append(...taskItems);
}

function clearTaskList() {
  taskList.innerHTML = "";
}

function loadTasks(filter) {
  let tasks = parseJSONFromLocalStorage("tasks", []);
  if (filter) tasks = tasks.filter((task) => task.selectedDate === filter);
  return tasks.map((taskObject) => createNewTask(taskObject));
}

function createNewTask(task) {
  const newTaskItem = document.createElement("label");
  const newTaskItemInput = document.createElement("input");
  const newTaskItemSpan = document.createElement("span");

  newTaskItem.className = "taskItem";
  newTaskItemInput.className = "taskItem__checkbox";
  newTaskItemInput.type = "checkbox";
  newTaskItemInput.checked = task.isDone;
  newTaskItemSpan.innerText = task.description;

  newTaskItem.append(newTaskItemInput, newTaskItemSpan);

  return newTaskItem;
}

function handleClickOnFilter() {
  const filterRadios = document.querySelectorAll(".filterDay__radio");
  filterRadios.forEach((filterRadio) => {
    filterRadio.onclick = () => updateTaskList(filterRadio.value);
  });
}

function handleClickOnActionButton() {
  const actionButton = document.querySelector(".actionButton");
  actionButton.onclick = () => (location.href = "new.html");
}
