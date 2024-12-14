export function renderTasks(tasks = null) {
    const tasksContainer = document.querySelector("table tbody");
    tasksContainer.innerHTML = "";

    if (!tasks) tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) return;

    tasks.forEach((task) => {
        const taskTr = document.createElement("tr");
        if (task.isCompleted) taskTr.classList.add("completed");
        taskTr.dataset.id = task.id;

        const taskCompleted = document.createElement("td");
        const completedCheckbox = document.createElement("input");
        completedCheckbox.type = "checkbox";
        completedCheckbox.checked = task.isCompleted;
        taskCompleted.appendChild(completedCheckbox);

        const taskDescription = document.createElement("td");
        taskDescription.innerText = task.description;

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.innerText = "X";
        deleteTaskBtn.classList.add("delete-task-btn", "btn", "btn-danger");
        taskDescription.appendChild(deleteTaskBtn);

        taskTr.append(taskCompleted, taskDescription);
        tasksContainer.appendChild(taskTr);
    });
}
