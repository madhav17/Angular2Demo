import {Component} from "angular2/core"
import {ShoppingListNewItemComponent} from "./shopping-new-item.component";
import {ListItem} from "../list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";

@Component({

    selector : "shopping-list",
    template :`

        <section>
           <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
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
            <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
        </section>
    `,
    directives :[ShoppingListNewItemComponent,ShoppingListItemComponent]
})

export class ShoppingListComponent{

    listItems  = new Array<ListItem>();

    //selectedItem: {name : string,amount:number};
    selectedItem: ListItem;

    onItemAdded(item : ListItem) : void{

         //this.listItems.push(item);// here we face databinding problem becoz it is containing the reference of 2 way binding
         this.listItems.push({name : item.name,amount : item.amount});
    }

    onSelect(item : ListItem) : void {
        this.selectedItem = item;
    }

    onRemove(item : ListItem):void{
        this.listItems.splice(this.listItems.indexOf(item),1);
        this.selectedItem = null;
    }
}