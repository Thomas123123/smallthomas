const expect = require('chai').expect ;
const marquee = require('../dist/marquee.js') ; 
const marquee2 = require('../dist/marquee2.js');

describe('test marquee content' , function(){
	it('content',function(){
		expect(marquee()).to.be.a("string");
		expect(marquee()).to.equal("歡迎搭乘台中市公車");
	});
	
});