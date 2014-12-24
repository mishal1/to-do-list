describe('homepage', function(){

  before(function(){
    casper.start('http:localhost:3000/');
  });

  var fillForm = function(casper){
    casper.fill('#form',{
        input: 'hello'
      }, true);
      casper.click('button')
  };

  it('says today, tomorrow, upcoming, someday and completed', function(){
    casper.then(function(){
      expect("body").to.contain.text("Tasks")
      expect("body").to.contain.text("Completed Tasks")
    });
  });

  it('should have a button and field to enter items which appends to the section', function(){
    casper.then(function(){
      fillForm(this)
      expect("#incompleteTasks").to.contain.text('hello')
    });
  });

  it('each item should have a tick box that moves an item to the completed tasks section', function(){
    casper.then(function(){
      fillForm(this)
      this.click('.checkbox')
      // had to add in checkbox class- look for alternative
      expect("#incompleteTasks").not.to.contain.text('hello')
      expect("#completedTasks").to.contain.text('hello')
    });
  });

  it('item can be deleted from the incompleted task list', function(){
    casper.then(function(){
      fillForm(this)
      this.click('.delete')
      expect("#completedTasks").not.to.contain.text('hello')
    });
  });

  it('item can be deleted from completed task list', function(){
    casper.then(function(){
      fillForm(this)
      this.click('.checkbox')
      this.click('.delete')
      expect("#incompletedTasks").not.to.contain.text('hello')
    });
  });

});

