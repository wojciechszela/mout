define(['mout/number/ordinal'], function(ordinal){

    describe('number/ordinal', function(){

        it('should return "[N]st" if number ends with 1 and is not 11', function(){
            expect( ordinal(1) ).toBe('1st');
            expect( ordinal(11) ).toBe('11th');
            expect( ordinal(111) ).toBe('111st');
            expect( ordinal(12341) ).toBe('12341st');
        });

        it('should return "[N]nd" if number ends with 2 and is not 12', function () {
            expect( ordinal(2) ).toBe('2nd');
            expect( ordinal(12) ).toBe('12th');
            expect( ordinal(22) ).toBe('22nd');
            expect( ordinal(12342) ).toBe('12342nd');
        });

        it('should return "[N]rd" if number ends with 3 and is not 13', function () {
            expect( ordinal(3) ).toBe('3rd');
            expect( ordinal(13) ).toBe('13th');
            expect( ordinal(23) ).toBe('23rd');
            expect( ordinal(12343) ).toBe('12343rd');
        });

        it('should return "[N]th" for numbers ended with 4,5,6,7,8,9,0', function () {
            expect( ordinal(4) ).toBe('4th');
            expect( ordinal(5) ).toBe('5th');
            expect( ordinal(6) ).toBe('6th');
            expect( ordinal(7) ).toBe('7th');
            expect( ordinal(8) ).toBe('8th');
            expect( ordinal(9) ).toBe('9th');
            expect( ordinal(10) ).toBe('10th');
            expect( ordinal(100) ).toBe('100th');
            expect( ordinal(456) ).toBe('456th');
        });

    });

});
