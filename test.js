/**
 * Created by solee on 4/6/16.
 */
'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var json2csv = require('./index');

//Fake data
var author = [{
  name: 'solee',
  homepage: 'http://solee.me',
  repo: {
    url: 'https://github.com/solee0524/koa-simple-json2csv.git',
    type: 'git'
  },
  keys: ['coo"l', 'lol']
}, {
  name: 'solee_clone',
  homepage: 'http://solee.me',
  repo: {
    url: 'https://github.com/solee0524/koa-simple-json2csv.git',
    type: 'git'
  },
  keys: ['clone', 'myth']
}];

var me = author[0];


describe('json to csv test', function () {
  it('should return csv string', function *() {
    var options = {
      data: author,
      fields: ['name', 'homepage', 'repo.url', 'keys']
    };
    var csv = yield json2csv(options);
    csv.should.be.a('string');
    csv.should.to.have.string('solee,http://solee.me,https://github.com/solee0524/koa-simple-json2csv.git,"coo""l,lol"\n');
    console.log(csv);
  });

  it('should return "Need Fields!" ', function *() {
    var options = {
      data: author,
      fields: []
    };
    var csv = yield json2csv(options);
    csv.should.be.a('string');
    csv.should.equal('Need Fields!');
  });

  it('should return "Data and Fields should be array!" ', function *() {
    var options = {
      data: me,
      fields: ['name', 'homepage', 'repo.url', 'keys']
    };
    var csv = yield json2csv(options);
    csv.should.be.a('string');
    csv.should.equal('Data and Fields should be array!');
  });

});