describe('homepage', function(){

  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('says today, tomorrow, upcoming, someday and completed', function(){
    casper.then(function(){
      expect("body").to.contain.text("Tasks")
      expect("body").to.contain.text("Completed Tasks")
    });
  });

  it('should have a button and field to enter items which appends to the section', function(){
    casper.then(function(){
      this.fill('.form',{
        input: 'eat'
      }, true);
      this.click('#button')
    });
    casper.waitForUrl('/', function(){
      expect("#today").to.contain.text('eat')
    });
  });

});

