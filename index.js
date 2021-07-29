import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localStorage.js";

const tasks = [
  {
    description: "My sample task",
    selectedDate: "today",
    isDone: false,
  },
  {
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, dicta.",
    selectedDate: "tomorrow",
    isDone: true,
  },
  {
    description: "My sample task 2",
    selectedDate: "today",
    isDone: false,
  },
];

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
