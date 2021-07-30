import { parseJSONFromLocalStorage } from "./utils/localStorage.js";

const taskList = document.querySelector(".wrapperMainGrid__tasks");

loadTasks();
handleClickOnFilter();
handleClickOnActionButton();

function loadTasks(filter) {
  let tasks = parseJSONFromLocalStorage("tasks", []);
  if (filter) tasks = tasks.filter((task) => task.selectedDate === filter);
  const taskItems = tasks.map((taskObject) => createNewTaskItem(taskObject));

  clearTaskList();
  taskList.append(...taskItems);
}

function clearTaskList() {
  taskList.innerHTML = "";
}

function createNewTaskItem(task) {
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
    filterRadio.onclick = () => loadTasks(filterRadio.value);
  });
}

function handleClickOnActionButton() {
  const actionButton = document.querySelector(".actionButton");
  actionButton.onclick = () => (location.href = "new.html");
}
