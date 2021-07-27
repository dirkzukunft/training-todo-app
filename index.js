document.querySelector(".actionButton").onclick = addTaskItem;

function addTaskItem() {
  document.querySelector(".wrapperMainGrid__tasks").append(createNewTaskItem());
}

function createNewTaskItem() {
  const newTaskItem = document.createElement("label");
  const newTaskItemInput = document.createElement("input");
  const newTaskItemSpan = document.createElement("span");

  newTaskItem.className = "taskItem";
  newTaskItemInput.className = "taskItem__checkbox";
  newTaskItemInput.type = "checkbox";
  newTaskItemSpan.innerText = "My new task";

  newTaskItem.append(newTaskItemInput, newTaskItemSpan);

  return newTaskItem;
}
