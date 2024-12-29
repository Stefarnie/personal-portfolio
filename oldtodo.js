document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const removeCompletedButton = document.getElementById("removeCompletedButton");
    const highlightTasksButton = document.getElementById("highlightTasksButton");

    // Add task function
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", toggleCompleted);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    // Toggle completion status
    function toggleCompleted(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    }

    // Remove completed tasks
    removeCompletedButton.addEventListener("click", function() {
        const tasks = taskList.querySelectorAll(".completed");
        tasks.forEach(task => task.remove());
    });

    // Highlight tasks functionality
    let isColorChanged = false;
    highlightTasksButton.addEventListener("click", function() {
        if (isColorChanged) {
            taskList.style.backgroundColor = "";
        } else {
            taskList.style.backgroundColor = "yellow";
        }
        isColorChanged = !isColorChanged;
    });
});
