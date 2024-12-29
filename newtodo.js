document.addEventListener("DOMContentLoaded", ()=> {
    const storedTask = JSON.parse(localStorage.getItem('tasks'))

    if(storedTask){
        storedTask.forEach((task)=>task.push(task))
        updateTasksList();
        updateStats();
    }
});

let tasks = [];

// storing tasks
const saveTasks = ()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
// add task function
const addTask = ()=> {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim()

    if(text){
        tasks.push({text:text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStats();
        saveTasks();
    }  
};

// complete task toggle
const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    saveTasks();
};

// delete button
const deleteTask = (index) => {
    tasks.splice(index, 1); 
    updateTasksList();
    updateStats();
    saveTasks();
};

// edit button
const editTask = (index) => {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index].text;

tasks.splice(index, 1);
updateTasksList();
saveTasks();
};

// completed task animation
const updateStats = ()=> {
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completeTasks/totalTasks) *100;
const progressBar = document.getElementById('progress');

progressBar.style.width = `${progress}%`

document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`;

if(tasks.length && completeTasks === totalTasks){
    blastConfetti();
 }
};

//  assigning classes to inputs
const updateTasksList = ()=>{
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed': ""}">
                <input type="checkbox" class="checkbox" ${task.completed? 'checked': ""}/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/31-512.png" onClick="editTask(${index})" />
                <img src="https://th.bing.com/th/id/R.a2ad7012d06ade8a525a76a94f1b927c?rik=B1sto5DDlAq3iw&pid=ImgRaw&r=0" onClick="deleteTask(${index})"/>
            </div>
        </div>
        `;
    listItem.addEventListener('change', ()=> toggleTaskComplete(index));
        taskList.append(listItem);
    });
}; 


document.getElementById("newTask").addEventListener("click", function(e){
    e.preventDefault();

    addTask();
});

const blastConfetti = ()=> {

const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}