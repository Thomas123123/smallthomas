var expect = require('chai').expect ;
var marquee = require('../js/marquee.js') ; 


describe('test marquee content' , function(){
	it('content',function(){
		expect(marquee()).to.be.a("string");
		expect(marquee()).to.equal("歡迎搭乘台中市公車");
		
	});
});