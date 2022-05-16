const mainObj = {};
let globalId = 0;
const form = document.getElementById("input-form");


const displayTasks = () => {
    const tasksListBefore = document.getElementById("tasks-list");
    tasksListBefore.outerHTML = "<ul id='tasks-list'></ul>";
    const tasksListAfter = document.getElementById("tasks-list");

    if (Object.keys(mainObj).length > 0)
        for (const [key, value] of Object.entries(mainObj)) {
            tasksListAfter.innerHTML += `<li id=${key} style='margin-bottom: 10px;'> ${value} 
                <button class='list-btn' type='button' onclick="deleteTask(this.parentNode.id)">
                <img src='delete.svg' alt='Delete Button' width="20px" height="20px"/></button>
            </li>`;
        }
}

const createTask = (event) => {
    event.preventDefault();

    globalId++;

    mainObj[globalId] = event.target[0].value;
    return displayTasks();
}

const deleteTask = (identifier) => {
    const {id} = document.getElementById(identifier);
    delete mainObj[id];
    return displayTasks();
}


form.addEventListener("submit", createTask);