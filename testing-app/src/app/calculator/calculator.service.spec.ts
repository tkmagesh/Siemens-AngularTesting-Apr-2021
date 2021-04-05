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
            const calculator = new CalculatorService();

            //prepare the data
            const n1 = 100,
                n2 = 200;

            //prepare the expected result
            const expectedResult = 300;

        //Act
            //perform the operation
            const result = calculator.add(n1, n2);

        //Assert
            //verity the outcome of the operation
            expect(result).toBe(expectedResult);
    })
})