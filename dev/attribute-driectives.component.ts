import {Component} from "angular2/core";
import {HighlightDirective} from "./highlight.directive";


@Component({

    selector: 'attr-directive',
    template: `


        <div myHighlight [highlightColor]="'red'" [mouseOverColor]="'cyan'">
        <!--This is used for binding single property-->
        <!--<div [myHighlight]="'red'">-->
            Highlight Me
        </div>
        <br/><br/>
        <div myHighlight [highlightColor]="'blue'" [mouseOverColor]="'yellow'">
           Another Highlight Me
        </div>
    `,
    directives: [HighlightDirective]
})


export class AttributeDirectives {

}