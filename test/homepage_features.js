describe('homepage', function(){

  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('says today, tomorrow, upcoming, someday and completed', function(){
    casper.then(function(){
      expect("body").to.contain.text("Today")
      expect("body").to.contain.text("Tomorrow")
      expect("body").to.contain.text("Upcoming")
      expect("body").to.contain.text("Someday")
      expect("body").to.contain.text("Completed")
    });
  });

});

