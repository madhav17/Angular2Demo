import {Component} from "angular2/core";
import {HighlightDirective} from "./highlight.directive";


@Component({

    selector : 'attr-directive',
    template : `

        <div myHighlight>
            Highlight Me
        </div>
        <br/><br/>
        <div myHighlight>
           Another Highlight Me
        </div>
    `,
    directives : [HighlightDirective]
})


export class AttributeDirectives {

}