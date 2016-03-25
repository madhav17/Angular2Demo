import {Component} from "angular2/core"
import {UnlessDirective} from "./unless.directive";


@Component({
    selector: 'structural-directive',
    template: `
        <section>

        <h2>Custom Structural Directive : *myUnless</h2>

        <div>
        Enter true or false

        <input type="text" #condition (keyup)="0"/>
        </div>

        <div *myUnless="condition.value != 'false' ">
            Only be shown if false was entered
        </div>
        </section>
    `,
    directives : [UnlessDirective]
})

export class StructuralDirective {

    public list:Array<string> = ['Apple', 'Milk', 'Bread'];
}
