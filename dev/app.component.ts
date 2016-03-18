import {Component} from "angular2/core";

@Component({

    selector: "app",
    template: `
        {{'Hey'}}
        <br/>
        {{1==1}}
        <br/>
        {{name}}
        <br/>
        {{onTest}}
        <br/>
        {{onTest()}}
        <br/>
        <input type="text" value="{{name}}" />
        <br/>
        <input type="text" value="{{name}}" class="{{'red'}}"/>
    `,

})

export class AppComponent {
    name = "Maddy"

    onTest():boolean {
        return 1 == 1;
    }
}