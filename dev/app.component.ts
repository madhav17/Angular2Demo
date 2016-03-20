import {Component} from "angular2/core";
import {InputComponent} from "./bindings/input.component";
import {ConfirmedComponent} from "./bindings/confirmed.component";

@Component({

    selector: "app",
    template: `
    <div class="container">
        <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
    </div>

    <div class="container">
    <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
    </div>


    `,

    directives:[InputComponent,ConfirmedComponent]
})

export class AppComponent {

    myself = {name : '',age : ''};
    confirmedMyself = {name : '',age : ''};

    onSubmit(myself : {name:string,age : string}){
        //this.myself = myself; // will give 2 way data binding
        this.myself = {name : myself.name,age : myself.age};
    }

    onConfirm(myself : {name:string,age : string}){
        //this.confirmedMyself  = myself;  // will give 2 way data binding
        this.confirmedMyself  = {name : myself.name,age : myself.age};
    }
}