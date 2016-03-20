import {Component} from "angular2/core";

@Component({

    selector: "app",
    template: `
        {{onTest()}}
        <br/>
        <input type="text"   (keyup) = "onKeyUp(inputElement.value)" #inputElement/>
        <p>{{values}}</p>
        <br/>

    `,

})

export class AppComponent {
    name = "Maddy";
    values:string = " ";
    //values : string;

    onTest():boolean {
        return 1 == 1;
    }

    onKeyUp(value:String) {
        if (value)
            this.values += value + " | ";
    }
}