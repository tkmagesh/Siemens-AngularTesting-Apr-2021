import { Inject, Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
    name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform{
    constructor(@Inject('MOMENT') private moment : any){

    }
    transform(value: any, ...args: any[]) {
        return this.moment(value).fromNow()
    }

}