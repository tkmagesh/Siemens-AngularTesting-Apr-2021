import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name : 'trimtext'
})
export class TrimTextPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value.length <= 20 ? value : value.substr(0,20) + '...';
    }
}