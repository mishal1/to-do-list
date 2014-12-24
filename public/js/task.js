var addTaskButton = document.getElementById('addTaskButton')
var incompleteTasks = document.getElementById('incompleteTasks')
var taskInput = document.getElementById('userInput')

var newTaskElement = function(taskString) {
  var listItem = document.createElement("li")
  var label = document.createElement("label")
  var checkbox = document.createElement("input")
  label.innerText = taskString
  checkbox.type = "checkbox"
  checkbox.className = "checkbox"
  listItem.appendChild(checkbox)
  listItem.appendChild(label)
  return listItem;
};

var addTask = function() {
  var listItem = newTaskElement(taskInput.value)
  incompleteTasks.appendChild(listItem)
};


addTaskButton.addEventListener('click', function(){
  event.preventDefault();
  addTask()        
});