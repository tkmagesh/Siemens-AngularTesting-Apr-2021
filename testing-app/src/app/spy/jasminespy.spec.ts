describe("Jasmine Spy", () => {
     it("Should create a spy object with ping method", () => {
        const timeService = jasmine.createSpyObj("TimeService", ["ping"])

        expect(timeService.ping).toBeDefined()

    });

    it("Should create a spy object and call the method", () => {
        const timeService = jasmine.createSpyObj("TimeService", ["ping"])

        timeService.ping()

        expect(timeService.ping).toHaveBeenCalled()
    })

    it("Should create a spy object and call the method that returns a value", () => {
        const retValue = new Date('5-Apr-2021')
        const timeService = jasmine.createSpyObj("TimeService", {
            getCurrentTime : retValue
        })

        const actualResult = timeService.getCurrentTime();

        expect(actualResult).toBe(retValue)
        expect(timeService.getCurrentTime).toHaveBeenCalledTimes(1)
    })
})