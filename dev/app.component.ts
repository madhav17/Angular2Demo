import {Component} from "angular2/core";
import {PropertyBindComponent} from "./property-bind.component";

@Component({

    selector: "app",
    template: `
    <section class="parent">
        <h1>Parent Component</h1>
        <h4>Please Enter your Name</h4>
        <input type="text" [(ngModel)]="name">

    <br/><br/><br/>
    <!--<p>{{name}}</p>-->
    <section class="child">
        <!--<my-prop-bind [myName]="name"></my-prop-bind>-->
        <my-prop-bind [myName]="name" [myAge]="25" (hobbiesChanged)= "hobbies = $event" ></my-prop-bind>
    </section>
    <p>My Hobbies are : {{hobbies}}  </p>
    </section>


    `,
    directives: [PropertyBindComponent]
})

export class AppComponent {

    name:string = '';
    hobbies:string = '';
}