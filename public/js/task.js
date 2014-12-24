var addTaskButton = document.getElementById('addTaskButton')
var tasks = document.getElementById('tasks')


var newTaskElement = function(taskString) {
  var listItem = document.createElement("li")
  var checkbox = document.createElement("input")
  var label = document.createElement("label")
  var editButton = document.createElement("button")
  // var editInput = document.createElement("input")
  var deleteButton = document.createElement("button")
  listItem.appendChild(checkbox)
  listItem.appendChild(label)
  listItem.appendChild(editButton)
  listItem.appendChild(deleteButton)
  return listItem;
};

var addTask = function() {
  var listItem = newTaskElement("hello")
  tasks.appendChild(listItem)
};

addTaskButton.addEventListener('click', function(){
  addTask()        
});