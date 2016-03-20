import {Component} from 'angular2/core';
import {DataBindingComponent} from "./databinding.component";

@Component({
    selector: 'app',
    template: '<data-binding></data-binding>',
    directives: [DataBindingComponent]
})
export class AppComponent {

}