import {Component} from "angular2/core"
import {ListItem} from "../list-item";
import {MyShoppingListService} from "./shopping-list.service";


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


})

export class ShoppingListNewItemComponent {

    item = {name:'',amount : 0};

    private _myShoppingListService : MyShoppingListService;

    constructor(_myshoppingListService : MyShoppingListService){
        this._myShoppingListService = _myshoppingListService;
    }

    onClick ():void{
        this._myShoppingListService.insertItems({name : this.item.name , amount : this.item.amount})
    }
}