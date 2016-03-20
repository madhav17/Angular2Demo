import {Component,EventEmitter} from "angular2/core"
import {Input} from "angular2/core";

@Component({

    selector : "my-prop-bind",
    template : `
        <h3>Property Binding</h3>
        <p>Hello {{name}}</p>
        <p>Age {{age}}</p>
        <h4>My Hobbiess are : </h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
        <input type="text" (keyup)="onTest($event.target.value)">
        <!--<input type="text" (keyup)="onHobbiesChanged($event.target.value)">-->
    `, 
    inputs:['name : myName'],
    // properties exposing as output as event
    outputs : ['hobbiesChanged']
})

export class PropertyBindComponent{
    //standard : property should be same
    @Input("myAge") age : number = 20;
    hobbiesChanged : EventEmitter<string> = new EventEmitter<string>();

    onHobbiesChanged(hobbies : string) : void{
        this.hobbiesChanged.emit(hobbies);
    }

    onTest(value :string) : void {
        console.log(value);
    }
}