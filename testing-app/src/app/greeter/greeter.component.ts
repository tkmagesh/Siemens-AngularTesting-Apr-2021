import { Component } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
    selector : 'app-greeter',
    template : `
        <h3>Greeter</h3>
        <hr>
        <label for="">User Name :</label>
        <input type="text" #txtUserName>
        <input type="button" value="Greet" (click)="onGreetClick(txtUserName.value)">
        <div>{{message | trimtext}}</div>
    `,
    providers : [GreeterService], 
    styleUrls : [],
})
export class GreeterComponent{
    message : string = '';

    constructor(private greeterService : GreeterService){

    }
    onGreetClick(userName : string) {
        this.message = this.greeterService.greet(userName);
    }
}