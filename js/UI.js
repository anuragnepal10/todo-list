import taskContainer from "./script.js";

export class UI {
    static run() {
        const taskContainerEl = document.querySelector(".task-container");
        taskContainerEl.innerHTML = ``;
        taskContainer.tasks.forEach((task, index) => {
            const taskEl = document.createElement("div");
            taskEl.classList.add("task");
            if (task.isComplete) {
                taskEl.classList.add("completed");
            }    
            taskEl.innerHTML = `
                <p class="task__value">${task.value}</p>
                <span class="task__functions">
                    <button class="complete-btn btn">
                        <i class="task__icon fa-solid fa-check"></i>
                    </button>
                    <button class="btn delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </span>
            `;

            if (taskContainer.status == "added" && index == (taskContainer.tasks.length - 1)) {
                taskEl.classList.add("added");
            }
            else {
                taskEl.classList.remove("animate");
            }
            taskContainerEl.appendChild(taskEl);
        })

        const completeBtns = document.querySelectorAll(".complete-btn");
        const deleteBtns = document.querySelectorAll(".delete-btn");

        completeBtns.forEach((completeBtn, index) => {
            completeBtn.addEventListener("click", () => {
                taskContainer.status = "completed"
                taskContainer.tasks[index].isComplete = taskContainer.tasks[index].isComplete? false: true;
                taskContainer.saveProgress();
                this.run();
            })
        })

        deleteBtns.forEach((deleteBtn, index) => {
            deleteBtn.addEventListener("click", () => {
                taskContainer.status = "removed";
                taskContainer.removeTask(taskContainer.tasks[index]);
                taskContainer.saveProgress();
                this.run();
            })
        })
    }
}