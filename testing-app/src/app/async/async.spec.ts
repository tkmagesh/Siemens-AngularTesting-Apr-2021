import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from 'rxjs/operators';

xdescribe("Async tests", () => {
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
            });
    });

    it('testing multiple async operations', fakeAsync(() => {
        let test1 = false;
        setTimeout(() => {
            test1 = true;
        }, 1000);

        let test2 = true;
        setTimeout(() => {
            test2 = false;
        }, 5000);

        const elapsedTime = flush();
        console.log(`elapsedTime = ${elapsedTime}`);
        expect(test1).toBeTrue();
        expect(test2).toBeFalse();

    }))

    it("testing promises", fakeAsync(() => {
        let test = false;

        Promise
            .resolve()
            .then(() => {
                console.log('First "then" block executed successfully');
                return Promise.resolve();
            })
            .then(() => {
                console.log('Second "then" block executed successfully');
                setTimeout(() => {
                    console.log('Timer elapsed');
                    test = true;
                }, 2000)
            })

        flush();
        console.log('Running test assertions');
        expect(test).toBeTrue();
    }))

    it('Testing time interval based async operations', fakeAsync(() => {
        let counter = 0;

        Promise.resolve()
            .then(() => {
                console.log('After flushing microtasks');
                counter += 10;
                setTimeout(() => {
                    counter += 1;
                },1000)
            });
        
        expect(counter).toBe(0);
        console.log('Before flushing microtasks');
        flushMicrotasks();

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(11);
        
    }))

    it('Async test for observables', fakeAsync(() => {
        let test = false;
        const test$ = of(test).pipe(delay(1000));

        test$.subscribe(() => {
            console.log('Subscribed to the observable');
            test = true;
        });

        tick(1000);
        
        console.log('Running test assertion');
        expect(test).toBeTrue();
    }));


})