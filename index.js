import { parseJSONFromLocalStorage } from "./utils/localStorage.js";

const taskList = document.querySelector(".wrapperMainGrid__tasks");
const tasks = parseJSONFromLocalStorage("tasks", []);
const taskListElements = tasks.map((task) => createNewTask(task));
taskList.append(...taskListElements);

const filterRadios = document.querySelectorAll(".filterDay__radio");
filterRadios.forEach((filterRadio) => {
  filterRadio.onclick = () =>
    updateTaskList(tasks, taskList, filterRadio.value);
});

const actionButton = document.querySelector(".actionButton");
actionButton.onclick = () => (location.href = "new.html");

// ------------------------------------------------------------------

function updateTaskList(tasks, taskListElement, filter) {
  clearTaskList(taskListElement);
  const taskItems = filterTasks(tasks, filter);
  taskListElement.append(...taskItems);
}

// ------------------------------------------------------------------

function clearTaskList(taskListElement) {
  taskListElement.innerHTML = "";
}

// ------------------------------------------------------------------

function filterTasks(tasks, filter) {
  const filteredTasks = tasks.filter((task) => task.selectedDate === filter);
  const filteredTasksElements = filteredTasks.map((task) =>
    createNewTask(task)
  );
  return filteredTasksElements;
}

// ------------------------------------------------------------------

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
