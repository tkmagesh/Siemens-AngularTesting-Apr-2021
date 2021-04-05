import { LoggerService } from "./logger.service";

export class CalculatorService{
    constructor (private loggerService : LoggerService){

    }
    add(x : number, y : number) : number {
        const result = x + y;
        this.loggerService.log(`Adding ${x} and ${y} results in ${result}`)
        return result;
    }

    subtract(x : number, y : number) : number {
        const result = x - y;
        this.loggerService.log(`Subtract ${y} from ${x} results in ${result}`)
        return result;
    }

    multiply(x : number, y : number) : number {
        const result = x * y;
        this.loggerService.log(`Multiply ${x} by ${y} results in ${result}`)
        return result;
    }

    divide(x : number, y : number) : number {
        const result = x / y;
        this.loggerService.log(`Dividing ${x} by ${y} results in ${result}`)
        return result;
    }
}