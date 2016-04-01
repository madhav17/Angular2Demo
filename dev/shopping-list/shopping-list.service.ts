import {Injectable} from "angular2/core";
import {shoppingList} from "./mock-shopping-list";

@Injectable()


export class MyShoppingListService{

    getItems() : Array<ListItem>{
        return shoppingList;
    }

    insertItems(item : ListItem) : void{
        shoppingList.push(item)
    }

    deleteItem(item : ListItem) : void{
        shoppingList.splice(shoppingList.indexOf(item),1);
    }
}