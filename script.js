
var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  if(!taskNameInput || !taskTypeInput){
    alert("You need to fill out the form!");
    return false;
  }
  formEl.reset();
  

  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

 listItemEl.setAttribute("data-task-id",taskIdCounter);
 var taskInfoEl = document.createElement("div");
 taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
 listItemEl.appendChild(taskInfoEl);

  
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);


  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique ID

  taskIdCounter++;

 
};

var createTaskActions = function(taskId){
  var actionContainerEl = doucment.createElement("div");
  actionContainerEl.className + "task-actions";

  // create edit button

  var editButtonEl = document.createElement("button");
  editeButtonEl.textContent = "Edit";
  editeButtonEl.className = "btn edit-btn";
  


}

formEl.addEventListener("submit", taskFormHandler);