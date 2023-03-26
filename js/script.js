import { Task } from "./Task.js";
import { TaskContainer } from "./TaskContainer.js";
import { UI } from "./UI.js";

const colorToggler = document.querySelector(".color-toggler");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

const taskContainer = new TaskContainer();
export default taskContainer;

input.focus();

colorToggler.addEventListener("click", updateColor);

UI.run();

const isDarkModeJSON = localStorage.getItem("isDarkMode");
// console.log(JSON.parse(isDarkModeJSON));
let isDarkMode = isDarkModeJSON? JSON.parse(isDarkModeJSON) :false;

isDarkModeJSON ? updateColor(): void(0);

function updateColor() {
    localStorage.setItem("isDarkMode",isDarkMode);
    if (!isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        colorToggler.children[0].classList.add("fa-sun");
        colorToggler.children[0].classList.remove("fa-moon");
        isDarkMode = true;       
    }
    else {
        document.documentElement.classList.remove("dark-mode");
        colorToggler.children[0].classList.remove("fa-sun");
        colorToggler.children[0].classList.add("fa-moon");
        isDarkMode = false;
    }   
}

form.addEventListener("submit", e => {
    e.preventDefault();
    taskContainer.status = "added";
    if (input.value.trim() != "") {
        const task = new Task(input.value);
        taskContainer.addTask(task);
        UI.run();
        input.value = ``;
    }
})