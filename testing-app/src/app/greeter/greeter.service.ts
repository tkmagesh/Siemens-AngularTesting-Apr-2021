import { Injectable } from "@angular/core";
import { TimeService } from "./time.service";

@Injectable()
export class GreeterService{
    constructor(private timeService : TimeService){

    }
    greet(userName : string) : string {
        const currentHour = this.timeService.getCurrentTime().getHours();
        if (currentHour <= 11){
            return `Hi ${userName}, Good Morning!`
        } else {
            return `Hi ${userName}, Have a good day!`
        }
    }
}