import {Component} from "angular2/core";

@Component({

    selector: "my-app",
    template: `
        <h1>My 1st Component</h1>
        <p>Hi. I'm <span [style.color]="inputElement.value==='yes' ? 'blue' : '' ">{{name}}</span> and this is my 1st Angular Component.
            <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>

            <br/>
            <br/>
            Is it Awesome ?
            <input type="text" #inputElement (keyup)="0"/>
            <br/>
            <br/>
            <button [disabled]="inputElement.value!=='yes'">Only enabled if 'yes' was entered</button>
        </p>
    `,
    //styles:[],
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name = "Madhav"
}