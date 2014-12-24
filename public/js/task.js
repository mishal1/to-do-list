var taskInput = document.getElementById("userInput");
var addTaskButton = document.getElementById('addTaskButton'); 
var incompleteTasks = document.getElementById("incompleteTasks"); 
var completedTasks= document.getElementById("completedTasks"); 


var NewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input"); 
  var label = document.createElement("label");
  var deleteButton = document.createElement("button");
  checkbox.type = "checkbox";
  label.innerText = taskString;
  deleteButton.className = "delete"
  deleteButton.innerText = "X"
  checkbox.className = "checkbox"
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton)
  return listItem;
}

var addTask = function() {
  var listItem = NewTaskElement(taskInput.value);
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
}

var deleteTask = function() {
  var listItem = this.parentNode;
  var entireList = listItem.parentNode;
  entireList.removeChild(listItem);
}

var taskCompleted = function() {
  var listItem = this.parentNode;
  completedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete)
}

var taskIncomplete = function() {
  var listItem = this.parentNode;
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var deleteButton = taskListItem.querySelector("button.delete")
  checkBox.onchange = checkBoxEventHandler;
  deleteButton.onclick = deleteTask
}

addTaskButton.addEventListener("click", addTask);

for(var i = 0; i < incompleteTasks.children.length; i++) {
  bindTaskEvents(incompleteTasks.children[i], taskCompleted);
}

for(var i = 0; i < completedTasks.children.length; i++) {
  bindTaskEvents(completedTasks.children[i], taskIncomplete);
}
