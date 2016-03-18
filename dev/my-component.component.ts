import {Component} from "angular2/core";
import {TestComponent} from "./test.component";
import {OnInit} from "angular2/core";

@Component({

    selector: "my-app",
    template: `
        <h1>My 1st Component</h1>
        <p>Hi. I'm <span [style.color]="inputElement.value==='yes' ? 'blue' : '' ">{{name}}</span> and my 1st Angular Component.
            <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>

            <br/>
            <br/>
            Is it Awesome ?
            <input type="text" #inputElement (keyup)="0"/>
            <br/>
            <br/>
            <button [disabled]="inputElement.value!=='yes'">Only enabled if 'yes' was entered</button>
        </p>
        <test></test>
    `,
    //styles:[],
    styleUrls: ['src/css/mycomponent.css'],
    directives : [TestComponent]
})

export class MyComponentComponent implements  OnInit{
    //name = "Madhav"
    // we want to get name dynamically in our real app
    name : string;
    //constructor(){
    //    this.name = "Maddy"
    //}
    // but we do not want to use constructor

// we use lifecycle hooks for it

    // call when component is initialized
    ngOnInit():any {
        this.name = "Maddy"
    }
}