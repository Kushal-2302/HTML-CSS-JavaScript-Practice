// DOM
let input = document.getElementById('taskInput');
let button = document.getElementById('addBtn');
let list = document.getElementById('taskList');

let tasks = [];

function addTask(title) {
    let task = {
        id: tasks.length + 1,
        title: title,
        complete: false
    };
    tasks.push(task);
}
addTask("Learn JS");
addTask("Build Project");
console.log(tasks);

function displayTasks() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        let li = document.createElement("li");

        //task text
        let span = document.createElement("span");
        span.textContent = task.title;
        console.log(task.title);
        // if (task.completed) {
        //     span.style.textDecoration = "line-through";
        // }

        //Delete button
        let delBtn = document.createComment("button");
        delBtn.textContent = "Delete";
        console.log(delBtn);

        //Complete button
        let completeBtn = document.createElement("button"); // ✅ CREATE FIRST
        completeBtn.textContent = "Done";
        console.log(completeBtn);


         delBtn.addEventListener("click", function () {
            deleteTask(task.id);
            displayTasks()
        });

        completeBtn.addEventListener("click", function () {
            completeTask(task.id);
            displayTasks();
        });
       
        li.innerHTML = `<span>${task.title}</span>`;
        li.innerHTML = "<button>Delete</button>";
        li.appendChild(completeBtn);

        list.appendChild(li);

    });
    // console.log(tasks);
    // console.log(list);
}
// displayTasks();
button.addEventListener("click", function () {
    let value = input.value;

    addTask(value);     // ✅ data added
    displayTasks();     // ❗ MUST call this
    // console.log(value);
    input.value = "";

});


function completeTask(id) {
    tasks.forEach(function (task) {
        if (task.id === id) {
            task.complete = true;
        }
    })
}

// completeTask(1);
// console.log(tasks)


function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
}

// deleteTask(2);
// console.log(tasks);





