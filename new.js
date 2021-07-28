document.querySelector(".newTaskForm__submit").onclick = (event) => {
  event.preventDefault();

  const newTask = {
    description: "",
    selectedDate: "",
    isDone: false,
  };

  newTask.selectedDate = document.querySelector(
    ".newTaskForm__date:checked"
  ).value;
  newTask.description = document.querySelector(
    ".newTaskForm__description"
  ).value;

  console.log(newTask);
};
