import { renderTasks } from "./render.js";

export function completeTask() {
    const tbody = document.querySelector("table tbody");
    tbody.addEventListener("click", (e) => {
        const clickedEl = e.target;
        const parsedTasks = JSON.parse(localStorage.getItem("tasks"));

        if (clickedEl instanceof HTMLInputElement) {
            const taskCompleted = clickedEl.checked;
            const taskRowEl = clickedEl.closest("tr");
            const taskIndex = parsedTasks.findIndex((task) => task.id.toString() === taskRowEl.dataset.id);
            parsedTasks[taskIndex].isCompleted = taskCompleted;
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));
            renderTasks(parsedTasks);
        }
    });
}
