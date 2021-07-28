document.querySelector(".newTaskForm__submit").onclick = (event) => {
  event.preventDefault();

  const selectedDate = document.querySelector(".newTaskForm__date:checked")
    .value;
  const description = document.querySelector(".newTaskForm__description").value;

  console.log(description, selectedDate);
};
