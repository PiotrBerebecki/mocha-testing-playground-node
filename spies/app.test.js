const expect = require('expect');
const rewire = require('rewire');


// Use rewire instead of require to mock
// It loads file using require but also adds two methods
// 1) app.__set__ and 2) app.__get__
var app = rewire('./app');


describe('App', () => {  
  
  it('should demonstrate how spy works', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
  
  
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);
  
  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';
    
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
  
});
