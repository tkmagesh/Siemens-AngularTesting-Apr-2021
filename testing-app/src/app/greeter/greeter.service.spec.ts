import { TestBed } from '@angular/core/testing';
import { GreeterService } from './greeter.service'
import { TimeService } from "./time.service";
/* class FakeTimeServiceForMorning {
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
}) */

/* describe("Greeter Service using Jasmine Spies", () => {
    it("Should greet 'Good Morning' when greeted before 12 hours", () => {
        //Arrange

        //Creating a spy object from the scratch
        //const morningTimeService = jasmine.createSpyObj("TimeService", {
        //    getCurrentTime : new Date('5-Apr-2021 9:00:00 AM')
        //});
        
        //Creating a spy on an existing object
        const morningTimeService = new TimeService();
        spyOn(morningTimeService, "getCurrentTime").and.returnValue(new Date('5-Apr-2021 9:00:00 AM'))
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
}) */

describe("Greeter Service using Jasmine Spies and TestBed", () => {
    it("Should greet 'Good Morning' when greeted before 12 hours", () => {
        //Arrange

        //Creating a spy object from the scratch
        const morningTimeService = jasmine.createSpyObj("TimeService", {
            getCurrentTime : new Date('5-Apr-2021 9:00:00 AM')
        });
        
        TestBed.configureTestingModule({
            providers : [
                { provide : GreeterService, useClass : GreeterService } ,
                { provide : TimeService, useValue : morningTimeService }
            ]
        });

        const greeterService = TestBed.inject(GreeterService);

        const userName = 'Magesh',
            expectedResult = 'Hi Magesh, Good Morning!';
            
        //Act
        const greetMsg = greeterService.greet(userName);

        //Assert
        expect(greetMsg).toBe(expectedResult)
    })
    it("Should greet 'Good day' when greeted after 12 hours", () => {
        //Arrange
        TestBed.configureTestingModule({
            providers : [
                GreeterService,
                TimeService
            ]
        })
        
        const userName = 'Magesh',
            expectedResult = 'Hi Magesh, Have a good day!';
        const greeterService = TestBed.inject(GreeterService);

        //configuring the module created timeservice for our needs
        const timeService = TestBed.inject(TimeService);
        spyOn(timeService, "getCurrentTime").and.returnValue(new Date('5-Apr-2021 16:00:00 PM'));

        //Act
        const greetMsg = greeterService.greet(userName);

        //Assert
        expect(greetMsg).toBe(expectedResult)
    })
})