const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;


// TEST 1
it('should return the correct response body for root route', (done) => {
  request(app)
    .get('/')
    .expect('Hello world!')
    .end(done);  
});


// TEST 2
it('should return the correct response for wrong url', (done) => {
  request(app)
    .get('/bad')
    .expect(404)
    .expect({
      error: 'Not found'
    })
    .end(done);
});


// TEST 3
it('should include a relevant piece of info for wrong url', (done) => {
  request(app)
    .get('/projects')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Mocha playground app'
      });
    })
    .end(done);  
});


// TEST 4
it('should return the correct response for users route', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Pete', age: 25
      });
    })
    .end(done);
});
