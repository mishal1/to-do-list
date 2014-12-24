var taskInput = document.getElementById("userInput"); //new-task
var addTaskButton = document.getElementById('addTaskButton'); //first button
var incompleteTasks = document.getElementById("incompleteTasks"); //incomplete-tasks
var completedTasks= document.getElementById("completedTasks"); //completed-tasks


var NewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input"); // checkbox
  var label = document.createElement("label");
  checkbox.type = "checkbox";
  label.innerText = taskString;
  checkbox.className = "checkbox"
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  return listItem;
}

var addTask = function() {
  var listItem = NewTaskElement(taskInput.value);
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
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
  var editButton = taskListItem.querySelector("button.edit");
  checkBox.onchange = checkBoxEventHandler;
}

addTaskButton.addEventListener("click", addTask);

for(var i = 0; i < incompleteTasks.children.length; i++) {
  bindTaskEvents(incompleteTasks.children[i], taskCompleted);
}

for(var i = 0; i < completedTasks.children.length; i++) {
  bindTaskEvents(completedTasks.children[i], taskIncomplete);
}
