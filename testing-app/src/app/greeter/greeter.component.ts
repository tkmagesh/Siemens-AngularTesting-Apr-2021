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
        <div>{{message.text | trimtext}}</div>
        <span>Created : <span> <small>{{message.createdAt | elapsed}}</small>
    `,
    providers : [GreeterService], 
    styleUrls : [],
})
export class GreeterComponent{
    message : {
        text : string,
        createdAt : Date
    } = { text : '', createdAt : null };

    constructor(private greeterService : GreeterService){

    }

    onGreetClick(userName : string) {
        this.message = {
            text : this.greeterService.greet(userName),
            createdAt : new Date('5-Apr-2021 9:00:00 AM')
        }
    }
}