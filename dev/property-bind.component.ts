import {Component,EventEmitter} from "angular2/core"
import {Input} from "angular2/core";

@Component({

    selector: "my-prop-bind",
    template: `

    <h1>You submitted the following details is this correct ?</h1>
    Your Name
    <input type="text" value="{{name}}">
    <br/><br/>
    Your Age
    <input type="text" value="{{age}}">
    <br/><br/>
    `,
    //outputs : ['hobbiesChanged']
})

export class PropertyBindComponent {
    //standard : property should be same
    @Input("myName") name : string = '';
    @Input("myAge") age : number;
    //hobbiesChanged : EventEmitter<string> = new EventEmitter<string>();
    //
    //onHobbiesChanged(hobbies : string) : void{
    //    this.hobbiesChanged.emit(hobbies);
    //}
}