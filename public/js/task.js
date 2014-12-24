var taskInput = document.getElementById("userInput"); //new-task
var addTaskButton = document.getElementById('addTaskButton'); //first button
var incompleteTasks = document.getElementById("incompleteTasks"); //incomplete-tasks
var completedTasks= document.getElementById("completedTasks"); //completed-tasks


var NewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input"); // checkbox
  var label = document.createElement("label");
  checkBox.type = "checkbox";
  label.innerText = taskString;
  listItem.appendChild(checkBox);
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
  alert("Task complete...");
}

var taskIncomplete = function() {
  alert("Task incomplete...");
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

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasks.children.length; i++) {
  bindTaskEvents(completedTasks.children[i], taskIncomplete);
}
