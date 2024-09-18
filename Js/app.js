
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if(taskName === ""){
        alert("Please enter a task name");
        return; 
    }
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
   li.innerHTML= 
   `
   <span class="task">💠${taskName}</span>
   <div class="buttons">
   <button class="done" onclick="toggleDone(this)">✔</button>
   <button class="delete" onclick="removeTask(this)">✖</button>
   </div>
   `
    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleDone(button){
    const li = (button.parentElement.parentElement);
    li.classList.toggle("done");

}
function removeTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}