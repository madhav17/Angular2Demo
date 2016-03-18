import {Component} from "angular2/core";
import {MyPuzzle} from "./puzzle/puzzle.component";

@Component({

    selector : "app",
    template : `
        <h1> Root Component </h1>
        <my-puzzle></my-puzzle>
    `,
    directives:[MyPuzzle]

})

export class AppComponent{

}