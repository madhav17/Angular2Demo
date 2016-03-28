import {Component} from "angular2/core"
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.services";

@Component({

    selector : 'component-1',
    template : `
    <div>
        <h1>Data Service Comp 1</h1>
        <button (click)="onGetData()">Get Some Data</button>
        <p>{{data}}</p>
        <br/><br>
        <input type="text" #newData>
        <button (click)="onInsert(newData.value)">Insert New Data</button>

    </div>
    `,
    //providers:[LoggingService,CalculatorService,DataService] // 2 diff instance will be created
    providers:[LoggingService,CalculatorService] //only 1 instance will be created
})

export class Component1Component{

    result : number;
    data : string;

    private _loggingService : LoggingService;
    private _calculatorService : CalculatorService;
    private _dataService : DataService;

    constructor(_loggingService: LoggingService,_calculatorService : CalculatorService,_dataService:DataService){
        this._loggingService = _loggingService;
        this._calculatorService = _calculatorService;
        this._dataService = _dataService;
    }

    onGetData():void{
        this.data = this._dataService.getRandomString()
    }

    onInsert(value : string) : void{
        this._dataService.insert(value);
    }

}