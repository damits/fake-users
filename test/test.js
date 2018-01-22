var assert = require('assert');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
const app = require('../app');

describe('USERS', function() {
  it('GET all users ', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.a('array');
        done();
      });
  });
  it('GET single user ', function(done) {
    request(app)
      .get('/users/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.id).to.be.a('number');
        expect(res.body.name).to.be.a('string');
        expect(res.body.surname).to.be.a('string');
        done();
      });
  });
  it('GET single user with a not found user ', function(done) {
    request(app)
      .get('/users/10')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('GET single user with a string id ', function(done) {
    request(app)
      .get('/users/pippo')
      .set('Accept', 'application/json')
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('DELETE single user ', function(done) {
    request(app)
      .delete('/users/10')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('USER add new user ', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send({user :{name: 'Pippo', surname: 'Baudo'}})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
