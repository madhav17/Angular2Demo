import {Component,EventEmitter} from "angular2/core"
import {ListItem} from "../list-item";


@Component({

    selector : "shopping-list-new-item",

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
        <button (click)="onClick()">Add Item</button>

    `,

    outputs:['itemAdded']

})

export class    ShoppingListNewItemComponent {

    item = {name:'',amount : 0};

    itemAdded = new EventEmitter<ListItem>();

    onClick ():void{
        this.itemAdded.emit(this.item);
    }
}