/* 
describe (test class), 
it (test case), 
expect (assertion api) 
matchers - toBe, not.toBe
*/

import { CalculatorService } from './calculator.service'

describe("A calculator", () => {
    it('Should add the given numbers', () => {
        //Arrange
            //prepare the sut
            const loggerService = jasmine.createSpyObj("LoggerService", ["log"])
            const calculator = new CalculatorService(loggerService);
            

            //prepare the data
            const n1 = 100,
                n2 = 200;
                
            //prepare the expected result
            const expectedResult = 300,
                expectedLogMessage = `Adding 100 and 200 results in 300`

        //Act
            //perform the operation
            const result = calculator.add(n1, n2);

        //Assert
            //verity the outcome of the operation
            expect(loggerService.log).toHaveBeenCalledWith(expectedLogMessage)
            expect(result).toBe(expectedResult);
    })

    it('Should subtract the given numbers', () => {
        //Arrange
            //prepare the sut
            const loggerService = jasmine.createSpyObj("LoggerService", ["log"])
            const calculator = new CalculatorService(loggerService);
            

            //prepare the data
            const n1 = 100,
                n2 = 200;
                
            //prepare the expected result
            const expectedResult = -100,
                expectedLogMessage = `Subtract 200 from 100 results in -100`

        //Act
            //perform the operation
            const result = calculator.subtract(n1, n2);

        //Assert
            //verity the outcome of the operation
            expect(loggerService.log).toHaveBeenCalledWith(expectedLogMessage)
            expect(result).toBe(expectedResult);
    })
})