import {Component} from "angular2/core";
import {AttributeDirectives} from "./attribute-driectives.component";
import {StructuralDirective} from "./structural-directives.component";

@Component({

    selector : "app",
    template : `
        <h1> Root Component </h1>
        <attr-directive></attr-directive>
        <br/><br/>
        <h1>Structural Component</h1>
        <structural-directive></structural-directive>
    `,
    directives : [AttributeDirectives,StructuralDirective]

})

export class AppComponent{

}