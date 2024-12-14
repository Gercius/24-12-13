import { renderTasks } from "./render.js";

export function deleteTask() {
    const tbody = document.querySelector("table tbody");
    tbody.addEventListener("click", (e) => {
        const parsedTasks = JSON.parse(localStorage.getItem("tasks"));

        if (e.target.classList.contains("delete-task-btn")) {
            const taskRowEl = e.target.closest("tr");
            const filteredTasks = parsedTasks.filter((task) => task.id.toString() !== taskRowEl.dataset.id);
            localStorage.setItem("tasks", JSON.stringify(filteredTasks));
            renderTasks(filteredTasks);
        }
    });
}
