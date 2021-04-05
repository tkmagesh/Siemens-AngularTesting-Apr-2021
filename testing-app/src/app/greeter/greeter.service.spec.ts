import { GreeterService } from './greeter.service'

class FakeTimeServiceForMorning {
    getCurrentTime() : Date {
        return new Date('5-Apr-2021 9:00:00 AM')
    }
}

class FakeTimeServiceForEvening {
    getCurrentTime() : Date {
        return new Date('5-Apr-2021 13:00:00 PM')
    }
}

describe("Greeter Service using Fake services", () => {
    it("Should greet 'Good Morning' when greeted before 12 hours", () => {
        //Arrange
        const morningTimeService = new FakeTimeServiceForMorning();
        const greeterService = new GreeterService(morningTimeService);
        const userName = 'Magesh',
            expectedResult = 'Hi Magesh, Good Morning!';
            
        //Act
        const greetMsg = greeterService.greet(userName);

        //Assert
        expect(greetMsg).toBe(expectedResult)
    })
    it("Should greet 'Good day' when greeted after 12 hours", () => {
        //Arrange
        const eveningTimeService = new FakeTimeServiceForEvening();
        const greeterService = new GreeterService(eveningTimeService);
        const userName = 'Magesh',
            expectedResult = 'Hi Magesh, Have a good day!';
            
        //Act
        const greetMsg = greeterService.greet(userName);

        //Assert
        expect(greetMsg).toBe(expectedResult)
    })
})

describe("Greeter Service using Jasmine Spies", () => {
    it("Should greet 'Good Morning' when greeted before 12 hours", () => {
        //Arrange
        const morningTimeService = jasmine.createSpyObj("TimeService", {
            getCurrentTime : new Date('5-Apr-2021 9:00:00 AM')
        });
        const greeterService = new GreeterService(morningTimeService);
        const userName = 'Magesh',
            expectedResult = 'Hi Magesh, Good Morning!';
            
        //Act
        const greetMsg = greeterService.greet(userName);

        //Assert
        expect(greetMsg).toBe(expectedResult)
    })
    it("Should greet 'Good day' when greeted after 12 hours", () => {
        //Arrange
        const eveningTimeService = jasmine.createSpyObj("TimeService", {
            getCurrentTime : new Date('5-Apr-2021 16:00:00 PM')
        })
        const greeterService = new GreeterService(eveningTimeService);
        const userName = 'Magesh',
            expectedResult = 'Hi Magesh, Have a good day!';
            
        //Act
        const greetMsg = greeterService.greet(userName);

        //Assert
        expect(greetMsg).toBe(expectedResult)
    })
})