import { ElapsedPipe } from "./elapsed.pipe";

describe('Elapsed Pipe', () => {
    it("Should display the value returned by moment", () => {
        const expectedResult = "a month ago";
        const momentObj = jasmine.createSpyObj("momentObj", {
            fromNow : expectedResult
        });

        const momentNS = jasmine.createSpyObj("momentNS", {
            moment : momentObj
        });
        const d = new Date();

        const elapsedPipe = new ElapsedPipe(momentNS.moment);
        var actualResult = elapsedPipe.transform(d);
        expect(momentNS.moment).toHaveBeenCalledWith(d);
        expect(momentObj.fromNow).toHaveBeenCalledTimes(1);
        expect(actualResult).toBe(expectedResult);
    })
})