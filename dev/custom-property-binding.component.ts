import {Component} from 'angular2/core';

@Component({
    selector: 'custom-property-binding',
    template: '<span class="highlight">My name is {{name}} (with alias) or {{name2}} (without alias)</span>',
    inputs: ['name:myName', 'name2']
})
export class CustomPropertyBindingComponent {
    name: string;
    name2: string;
}