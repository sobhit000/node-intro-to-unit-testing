const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return either fizz/buzz/fizz-buzz/num', function () {
		const normalCases = [
		{num: 3, expected: 'fizz'},
		{num: 5, expected: 'buzz'},
		{num: 15, expected: 'fizz-buzz'},
		{num: 17, expected: 17}
	];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);	
		});
	});

	it('should raise an error if arg not number', function () {
		const badInputs = [
			['num'],
			['fizz'],
			[false]
		];

		badInputs.forEach(function (input) {
			expect(function () {
				fizzBuzzer(input[0]);
			}).to.throw(Error);
		});
	});
});