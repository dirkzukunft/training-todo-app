const sampleTask = {
  description: "My sample task",
  selectedDate: "today",
  isDone: false,
};

document.querySelector(".actionButton").onclick = () => addTaskItem(sampleTask);

function addTaskItem(task) {
  document
    .querySelector(".wrapperMainGrid__tasks")
    .append(createNewTaskItem(task));
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
