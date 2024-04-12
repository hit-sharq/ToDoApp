const addBtn = document.querySelector("#add-btn")
const newTaskInput = document.querySelector("#addTask")
const pendingTask =document.querySelector("#pending-tasks")
const tasksContainer = document.querySelector("#tasks")
const error = document.getElementById("error")
const countValue = document.querySelector(".countValue")
let taskCount = 0;
let id = 1
const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
}
const addTask = () => {

taskCount ++
displayCount(taskCount)
const taskName = newTaskInput.value;
const task = document.createElement("div")
task.innerHTML= `<div class ="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskName}</span>
<button class ="edit">
<i class="fa-solid fa-pen-to-square"></i>
</button>
<button class="delete">
<i class="fa-solid fa-delete-left"></i>
</button>
</div>`
    pendingTask.append(task)

    const tasksCheck = document.querySelectorAll(".task-check")
    tasksCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
        checkBox.nextElementSibling.classList.toggle("completed")
        if (checkBox.checked) {
            taskCount -= 1;
        }else{
            taskCount += 1;
        }
        displayCount(taskCount)
    }

})
    error.style.display = "none";
    if (!taskName) {
        setTimeout(() => {
            error.style.display="block";
    }, 200);
  }
  const editButton = document.querySelectorAll(".edit")
   editButton.forEach((editBtn) => {
   editBtn.onclick = (e) => {
   let targetElement = e.target.closest(".task");
   let originalText = targetElement.querySelector(".taskname").innerText;
   let editText = prompt("Edit task", originalText);
   if (editText) {
       targetElement.querySelector(".taskname").innerText = editText;
   }
   }
});

const deleteButton = document.querySelectorAll(".delete")
deleteButton.forEach((button) => {
    button.onclick = () => {
        const checkBox = button.parentNode.querySelector(".task-check");
        if (!checkBox.checked) {
            taskCount -= 1;
            displayCount(taskCount);
        }
        button.parentNode.remove();
    }

})
};
  addBtn.addEventListener("click", addTask);




window.onload = () => {
     taskCount = 0;
    displayCount(taskCount)
    newTaskInput.value = "";

}