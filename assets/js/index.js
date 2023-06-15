const taskManager = new TaskManager()

console.log(taskManager.tasks)
document.getElementById("task-form").addEventListener("submit", validFormFieldInput)

function validFormFieldInput(event) {
  event.preventDefault();
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    console.log("name:  "+name);
    const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
    const description = newTaskDescriptionInput.value;
    console.log("description:  "+description);
    const newTaskAssignedInput = document.querySelector('#newTaskAssignedInput');
    const assigned = newTaskAssignedInput.value;
    console.log("Assigned:  "+assigned);
    const dateInput = document.querySelector('#dateInput');
    const date = dateInput.value;
    console.log("date:  "+date);
    if (!name || !description || !assigned)
return ;
console.log("formValidated")
taskManager.addTask(name, description, assigned, date)
console.log(taskManager);
}


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  console.log('Hello');