import { TrimTextPipe } from './trimText.pipe';

describe("TrimText Pipe", () => {
    let trimTextPipe;

    beforeEach(() => {
        trimTextPipe = new TrimTextPipe();
    });

    it("should display the given text when text length <= 20", () => {
        const input = 'short string',
            expectedResult = 'short string';

        const result = trimTextPipe.transform(input);

        expect(result).toBe(expectedResult);
    })
    it("should display truncated text when text length > 20", () => {
        const input = 'This is a really long string for testing',
            expectedResult = 'This is a really lon...';

        const result = trimTextPipe.transform(input);

        expect(result).toBe(expectedResult);
    })
})