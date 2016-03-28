import {Component} from "angular2/core"
import {LoggingService} from "./services/logging.service";

@Component({

    selector : 'component-1',
    template : `
        <input type="text"  #message>
        <button (click)="onLog(message.value)">Send</button>

    `,
    providers:[LoggingService]
})

export class Component1Component{

    private _loggingService : LoggingService;

    constructor(_loggingService: LoggingService){
        this._loggingService = _loggingService;
    }

    onLog(message : string):void{
        this._loggingService.log(message);
    }

}