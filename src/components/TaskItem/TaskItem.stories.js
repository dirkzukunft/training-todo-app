import "./TaskItem.css";
import compontentTaskItem from "./TaskItem.html";
import compontentTaskItemDone from "./TaskItemDone.html";

export default {
  title: "Components/TaskItem",
  parameters: { layout: "fullscreen" },
};

export const TaskItem = () => compontentTaskItem;
export const TaskItemDone = () => compontentTaskItemDone;
