import {Component} from "angular2/core"


@Component({
    selector: 'structural-directive',
    template: `
        <section>

        <h2>[ngSwitch]</h2>
        <div>
            Enter red,blue or green
            <br>
            <input type="text" #color (keyup)="0">
        </div>

        <!--we use square brackets with ngSwitch becoz we are not specifying what should happen on different state -->
        <!--we should specify that state individual by specifing template-->
        <!--template is html 5 tag and each template will get ngSwitchWhen directive-->

        <!--to handle default else default will always be printed-->
        <div *ngIf="color.value != ''">
        <div [ngSwitch]="color.value">
            <template [ngSwitchWhen]="'red'">
                Color is red
            </template>

            <template [ngSwitchWhen]="'blue'">
                Color is blue
            </template>

            <template [ngSwitchWhen]="'green'">
                Color is green
            </template>

            <template ngSwitchDefault>
                Default
            </template>
        </div>
        </div>
        </section>
    `,
})

export class StructuralDirective {

    public list:Array<string> = ['Apple', 'Milk', 'Bread'];
}
