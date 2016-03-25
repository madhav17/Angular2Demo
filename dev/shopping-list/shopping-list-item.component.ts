import  {Component,EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";

@Component({

    selector : "shopping-list-item",

    template : `

     <div>
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name" />
        </div>
         <br>
         <div>
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount" />
        </div>
         <br>
        <button (click)="onDelete()">Delete Item</button>

    `,

    inputs : ['item'],
    outputs : ['removed']

})

export  class ShoppingListItemComponent{

    item = {name : '',amount : 0};

    removed = new EventEmitter<ListItem>();

    onDelete() : void {
        this.removed.emit(this.item);
    }
}