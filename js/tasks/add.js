import { renderTasks } from "./render.js";

export function addTask() {
    const formInput = document.querySelector("form input");
    const addTaskBtn = document.querySelector(".add-task-btn");

    addTaskBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!formInput.value) return;

        const task = {
            description: formInput.value,
            isCompleted: false,
            id: new Date().getTime(),
        };

        const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (!parsedTasks) {
            localStorage.setItem("tasks", JSON.stringify([task]));
        } else {
            parsedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));
        }
        renderTasks(parsedTasks);
        formInput.value = "";
    });
}
