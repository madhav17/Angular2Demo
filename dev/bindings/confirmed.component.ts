import {Component,EventEmitter} from "angular2/core"

@Component({

    selector: 'my-confirm',
    template: `

        <h1>You submitted the following details. Is this correct ? </h1>
        <p>
            Your name is
            <span>{{myself.name}}</span>
            and you're
            <span>{{myself.age}}</span>
            yrs old. Please click on 'Confirm' if you have changed it.
        </p>

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

        <button [disabled] = "!isValid" (click)="onConfirm()">Submit</button>

    `,
    inputs : ['myself'],
    outputs:['confirmed']
})

export class ConfirmedComponent {

    myself = {name : '',age : ''};
    isFilled : boolean = false;
    isValid : boolean = false;

    confirmed = new EventEmitter<{name : string,age : string}>();

    onKeyUp() : void{

        this.isFilled = (this.myself.name && this.myself.age) ? true : false;

        this.isValid = (this.myself.name && /^\d+$/.test(this.myself.age)) ? true : false;
    }

    onConfirm(){
        this.confirmed.emit(this.myself);
    }

}