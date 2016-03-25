import {Component} from "angular2/core"


@Component({
    selector: 'structural-directive',
    template: `
        <section class="directive">

            <h2>*ngIf</h2>

            <div>
                Enter a number higher than 10
                <br/>
                <input type="text" #number (keyup)="0"/>
            </div>
            <br/>
            <!--we can also call fuction in double code of ngIf or any expression that result in true or false-->

            <div *ngIf="number.value > 10">
                <h5>Ho Gaya</h5>
                Number is greater than 10
            </div>

             <div *ngIf="number.value < 10 && number.value != '' ">
                <h5>Ho Gaya</h5>
                Number is less than 10
            </div>


        </section>
    `,
})

export class StructuralDirective {

}
