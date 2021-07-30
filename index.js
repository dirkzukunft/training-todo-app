import { parseJSONFromLocalStorage } from "./utils/localStorage.js";

const tasks = parseJSONFromLocalStorage("tasks", []);
const taskItems = tasks.map((taskObject) => createNewTaskItem(taskObject));

const taskList = document.querySelector(".wrapperMainGrid__tasks");
taskList.append(...taskItems);

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
