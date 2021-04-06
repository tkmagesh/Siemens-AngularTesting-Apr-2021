fdescribe("Async tests", () => {
    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning the result`);
            callback(result);
        }, 4000);
    }

    it('AddAsync function adds the given numbers', (done : DoneFn) => {
        //Arrange
            const x = 100,
                y = 200,
                expectedResult = 300;

        //Act
            addAsync(x,y, (result) => {
                expect(result).toBe(expectedResult);
                done();
            })
    })

})