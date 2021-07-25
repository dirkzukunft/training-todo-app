import "./IconButton.css";
import componentIconButtonMenu from "./IconButtonMenu.html";
import componentIconButtonNotification from "./IconButtonNotification.html";
import componentIconButtonBack from "./IconButtonBack.html";
import componentIconButtonClose from "./IconButtonClose.html";

export default {
  title: "Components/IconButton",
  parameters: { layout: "fullscreen" },
};

export const IconButtonMenu = () => componentIconButtonMenu;
export const IconButtonNotification = () => componentIconButtonNotification;
export const IconButtonBack = () => componentIconButtonBack;
export const IconButtonClose = () => componentIconButtonClose;
