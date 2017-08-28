var calc = require('../app/calculator.js');

describe('calculator-app', function () {
    describe('Addition', function(){
        it('returns result of 8', function(){
            expect(calc.add(3,5)).toBe(8);
        });
        it('returns result of 0', function(){
            expect(calc.add(4,-4)).toBe(0);
        });
    });

    describe('Subtraction', function(){
        it('returns result of 6', function(){
            expect(calc.subtract(8,2)).toBe(6);
        });
        it('returns result of -6', function(){
            expect(calc.subtract(2,8)).toBe(-6);
        });
    });
}); 
