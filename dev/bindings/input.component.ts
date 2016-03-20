import {Component,EventEmitter} from "angular2/core";


@Component({

    selector : 'my-input',
    template : `
        <h2>Your Details Please</h2>
        <div>
            <label for = "name">Your Name</label>
            <input type="text" name="name" id="name" [(ngModel)]="myself.name" (keyup)="onKeyUp()">
        </div>
         <div>
            <label for = "age">Your Age</label>
            <input type="text" name="age" id="age" [(ngModel)]="myself.age" (keyup)="onKeyUp()">
        </div>
        <div>
            Filled Out : {{isFilled ? 'Yes' : 'No'}}
        </div>
        <div>
            Valid : {{isValid ? 'Yes' : 'No'}}
        </div>
        <br/><br/>

        <button [disabled] = "!isValid" (click)="onSubmit()">Submit</button>

    `,
    inputs :['myself'],
    outputs : ['submitted']
})

export class InputComponent{
    myself = {name : '',age : ''};
    isFilled : boolean = false;
    isValid : boolean = false;

    submitted = new EventEmitter<{name : string,age : string}>();

    onKeyUp() : void{

        this.isFilled = (this.myself.name && this.myself.age) ? true : false;

        this.isValid = (this.myself.name && /^\d+$/.test(this.myself.age)) ? true : false;
    }

    onSubmit(){
             this.submitted.emit(this.myself);
    }
}