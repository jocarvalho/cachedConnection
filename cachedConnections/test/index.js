/**
 * 
 */
var should = require('chai').should(),
	assert = require('chai').assert,
    cached = require('../cachedConnections').cachedConnection,
    url="mongodb://localhost:27017/stresstest";

describe('#init', function() {
  it('call cached function without err;', function() {
	  cached(url,function(response){
    	response.status.should.equal("success");
      });
  });

  it('cached _db as Mongoclient class', function() {
	  cached(url,function(response){
	    	response.db.should.be.a('MongoClient');
	    });
  });
  
});