define(['mout/array/sortBy'], function(sortBy){

    describe('array/sortBy', function(){

        it('should sort array with function', function(){
            var arr = [
                { a: 1 },
                { a: 3 },
                { a: 2 }
            ];

            var result = sortBy(arr, function(item){ return item.a; });
            expect(result).toEqual([ arr[0], arr[2], arr[1] ]);
        });

        it('should sort array with property name', function() {
            var arr = [
                { a: 3 },
                { a: 5 },
                { a: 1 }
            ];

            var result = sortBy(arr, 'a');
            expect( sortBy(arr, 'a') ).toEqual([ arr[2], arr[0], arr[1] ]);
        });

        it('should pass index and context to accessor', function() {
            var context = {},
                arr = [
                    { b: 'a' },
                    { b: 'c' },
                    { b: 'b' }
                ];

            var result = sortBy(arr, function(item) {
                expect( this ).toBe(context);
                return item.b;
            }, context);

            expect( result ).toEqual([ arr[0], arr[2], arr[1] ]);
        });

    });

});
