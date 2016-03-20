import {Component} from "angular2/core"
import {Input} from "angular2/core";

@Component({

    selector : "my-prop-bind",
    template : `
        <h3>Property Binding</h3>
        <p>Hello {{myName}}</p>
        <p>Hello {{name}}</p>
        <p>Age {{myAge}}</p>
        <p>Address {{address}}</p>
        <!--Now it won't work becoz we have created alias-->
        <p>Address {{myAddress}}</p>
        <p>Pincode {{code}}</p>
    `,
    inputs:['myName',"myAge","address : myAddress"]
})

export class PropertyBindComponent{
    //standard : property name should be same
    myName : string="";
    name : string = "Maddy";
    myAge : number = 20;
    address : string = "";
    @Input("pinCode") code : string='';
}