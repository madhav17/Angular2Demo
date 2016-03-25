import {Component} from "angular2/core";
import {AttributeDirectives} from "./attribute-driectives.component";

@Component({

    selector : "app",
    template : `
        <h1> Root Component </h1>
        <attr-directive></attr-directive>
    `,
    directives : [AttributeDirectives]

})

export class AppComponent{

}