import {Component} from "angular2/core";
import {PropertyBindComponent} from "./property-bind.component";

@Component({

    selector: "app",
    template: `
    <section class="parent">
    <h1>Your Details, please</h1>
    Your Name
    <input type="text" #inputName (keyup)="0">
    <br/><br/>
    Your Age
    <input type="text" #inputAge (keyup)="0">
    <br/><br/>
    <input type="button" value="Submit" #submitButton [disabled]="isDisabled(inputName.value,inputAge.value)" (click)="setClick()">
    </section>

    <br/><br/>
    <br/><br/>
    <section class="parent">
        <my-prop-bind [myName]="getClick() ? inputName.value : '' " [myAge]="getClick() ? inputAge.value : '' "></my-prop-bind>
    </section>


    `,
    directives: [PropertyBindComponent]
})

export class AppComponent {

    name:string = '';
    hobbies:string = '';
    fetchClick : boolean = false;

    isDisabled(name:string,age:string):boolean{
        return (name && age)?false:true;
    }

    setClick():void{
        this.fetchClick = !this.fetchClick;
    }

    getClick() : boolean {
        return this.fetchClick;
    }
}