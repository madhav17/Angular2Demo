import  {Component,EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";
import {MyShoppingListService} from "./shopping-list.service";

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
    outputs:['removed']

})

export  class ShoppingListItemComponent{

    item = {name : '',amount : 0};
    removed = new EventEmitter<ListItem>();

    private _myShoppingListService : MyShoppingListService;

    constructor(_myShoppingListService : MyShoppingListService){
        this._myShoppingListService = _myShoppingListService;
    }

    onDelete() : void {
        this._myShoppingListService.deleteItem(this.item);
        this.removed.emit(null)
    }
}