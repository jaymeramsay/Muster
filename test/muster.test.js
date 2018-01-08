const expect = require('chai').expect;
process.env.NODE_ENV = 'test';
process.env.PORT = 3000;

const server = require('../server.js');
const request = require('supertest')(server);
const knex = require('../db/knex');

describe("express works", function () {
  it('returns true when working', function () {
    expect(true).to.be.true;
  });
});
