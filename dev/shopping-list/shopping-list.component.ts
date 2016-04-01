import {Component,OnInit} from "angular2/core"
import {ShoppingListNewItemComponent} from "./shopping-new-item.component";
import {ListItem} from "../list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";
import {MyShoppingListService} from "./shopping-list.service";

@Component({

    selector : "shopping-list",
    template :`

        <section>
           <shopping-list-new-item></shopping-list-new-item>
        </section>

        <section>

            <h3>My List</h3>

             <div class="list">
                <ul>
                    <li *ngFor="#item of listItems" (click)="onSelect(item)">
                        {{item.name}} {{item.amount}}
                    </li>
                </ul>
             </div>

        </section>

        <section *ngIf = "selectedItem != null">

            <h3>Edt Item</h3>
            <shopping-list-item [item]="selectedItem" (removed)="onRemove()"></shopping-list-item>
        </section>
    `,
    directives :[ShoppingListNewItemComponent,ShoppingListItemComponent],
    providers:[MyShoppingListService]
})

export class ShoppingListComponent implements OnInit{

    listItems : Array<ListItem>;
    selectedItem: ListItem;

    private _myShoppingListService : MyShoppingListService;

    constructor(_myShoppingListService : MyShoppingListService){
        this._myShoppingListService = _myShoppingListService;
    }

    ngOnInit():any {
        this.listItems = this._myShoppingListService.getItems()
    }


    onSelect(item : ListItem) : void {
        this.selectedItem = item;
    }

    onRemove():void{
        this.selectedItem = null;
    }

}