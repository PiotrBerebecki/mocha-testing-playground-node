const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
  const res = utils.add(33, 11);
  
  // if (res !== 44) {
  //   throw new Error(`Expected 44 but got ${res}`);
  // } else {
  //   console.log(`Expected 44 and got ${res}`);
  // }
  
  // expect(res).toBeA('number');
  expect(res).toBe(44).toBeA('number');
});


it('should add two numbers in async function', (done) => {
  utils.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});


it('should square a number', () => {
  const res = utils.square(8);
  
  // if (res !== 64) {
  //   throw new Error(`Expected 64 but got ${res}`);
  // } else {
  //   console.log(`Expected 64 and got ${res}`);
  // }
  
  expect(res).toBe(64).toBeA('number');
});

it('should square a number in async function', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done();
  });
});


it('should expect some value', () => {
  expect(12).toNotBe(13);
  
  // compare objects
  // to be uses triple equals so we can't use it for objects
  // expect({name: 'Piotr'}).toBe({name: 'Piotr'});
  
  // instead we use toEqual
  expect({name: 'Piotr'}).toEqual({name: 'Piotr'}); // pass
  // expect({name: 'Piotr'}).toEqual({name: 'piotr'}); // not pass
  
  // check if array includes
  expect([1,2,3]).toInclude(2);
  expect([1,2,3]).toExclude(4);
  
  expect({name: 'Piotr'}).toInclude({name: 'Piotr'});
});


it('should set firstName and lastName', () => {
  const user1 = {
    age: 25,
    location: 'London'
  };
  
  const fullName = 'Peter Bradley';
  
  const user1Update = utils.setName(user1, fullName);
  
  expect(user1Update).toBeA('object');
  expect(user1Update).toInclude({
    firstName: 'Peter',
    lastName: 'Bradley'
  });
});
