import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'custom-event-binding',
    template: `
        <button (click)="onClick()">Click me to change something in my parent component</button>
        <button (click)="onClickAlias()">Click me to change something in my parent component</button>
    `,
    outputs: ['click:myClick', 'click2']
})
export class CustomEventBindingComponent {
    click = new EventEmitter<string>();
    click2 = new EventEmitter<string>();

    onClick() {
        this.click.emit('Something changed!');
    }

    onClickAlias() {
        this.click2.emit('Something changed (Alias used)!');
    }
}