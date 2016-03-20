import {Component} from "angular2/core";

@Component({

    selector: "app",
    template: `
        {{onTest()}}
        <br/>
        <input type="text" value="{{name}}" />
        <br/>
        <input type="text" value="{{name}}" class="{{'red'}}"/>
        <br/>

        <!--similar to above-->
        <input type="text" [value]= "name" class="{{'red'}}"/>
        <br/>
        <input type="text" [value]= "1==1" class="{{'red'}}"/>
        <br/>
        <!--[value] is not default html attribute but it is angular 2 property defined for input tag    -->

        <!--with directive-->
        <input type="text" [value]= "1==1" [ngClass] = "'red'"/>
        <br/>
        <input type="text" [value]= "1==1" [ngClass] = "{red : true}"/>
        <!--it is not attribute of html it as directive for angular 2-->
        <br/>
        <input type="text" [value]= "1==1" [ngClass] = "{red : true}" [disabled] = "1 == 1"/>
        <br/>
        <!--another form of using property binding-->
        <!--<my-component [theValue]=""></my-component>-->

    `,

})

export class AppComponent {
    name = "Maddy"

    onTest():boolean {
        return 1 == 1;
    }
}