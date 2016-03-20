import {Component} from 'angular2/core';
import {CustomPropertyBindingComponent} from "./custom-property-binding.component";
import {CustomEventBindingComponent} from "./custom-event-binding.component";

@Component({
    selector: 'data-binding',
    templateUrl: 'dev/databinding.html',
    directives: [CustomPropertyBindingComponent, CustomEventBindingComponent]
})
export class DataBindingComponent {
    interpolationString = 'This was inserted with interpolation syntax';
    currentContent = '';
    lastContent = '';
    isMouseover = false;
    myself = {name: '', age: 0};
    changed = 'Nothing changed';

    onClick() {
        alert('Clicked!');
    }

    onKeyup(event:KeyboardEvent) {
        this.currentContent = (<HTMLInputElement> event.target).value;
    }

    onSave(value: string) {
        this.lastContent = value;
    }

    onToggleHover() {
        this.isMouseover = !this.isMouseover;
    }

    onCustomClick(value) {
        this.changed = value;
    }
}
