import { addTask } from "./tasks/add.js";
import { completeTask } from "./tasks/complete.js";
import { deleteTask } from "./tasks/delete.js";
import { renderTasks } from "./tasks/render.js";

(function main() {
    renderTasks();
    addTask();
    deleteTask();
    completeTask();
})();
