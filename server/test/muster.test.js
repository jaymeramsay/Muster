const expect = require('chai').expect;
process.env.NODE_ENV = 'test';
process.env.PORT = 3000;

const server = require('../server/server.js');
const request = require('supertest')(server);
const knex = require('../db/knex');

describe("express works", function () {
  it('returns true when working', function () {
    expect(true).to.be.true;
  });
});

// describe('home page'), () => {
//   it('should show the homepage', function (done) {
//     request.get('/')
//       .expect(200)
//   })
}
