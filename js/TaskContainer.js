export class TaskContainer {
    constructor() {
        const prevTasks = localStorage.getItem("tasks");
        this.tasks = prevTasks? JSON.parse(prevTasks): [];
        this.status;
    }

    addTask(task) {
        this.tasks.push(task);
        this.saveProgress();
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
        this.saveProgress();
    }

    saveProgress() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}