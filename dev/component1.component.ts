import {Component} from "angular2/core"
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";

@Component({

    selector : 'component-1',
    template : `
    <div>
        <h1>Logging Service</h1>
        <input type="text"  #message>
        <button (click)="onLog(message.value)">Send</button>
    </div>

    <div>
        <h1>Calculator Service</h1>
        <p>Add or multiple these two number : </p>
        <input type="text" #num1>
        <input type="text" #num2>
        <button (click)="onMultiply(num1.value,num2.value)">Multiply</button>
        <button (click)="onAddition(num1.value,num2.value)">Add</button>
        <br/><br/>
        <p>Result : {{result}}</p>
    </div>
    `,
    providers:[LoggingService,CalculatorService]
})

export class Component1Component{

    result : number;

    private _loggingService : LoggingService;
    private _calculatorService : CalculatorService;

    constructor(_loggingService: LoggingService,_calculatorService : CalculatorService){
        this._loggingService = _loggingService;
        this._calculatorService = _calculatorService;
    }

    onLog(message : string):void{
        this._loggingService.log(message);
    }

    onMultiply(first:string,second : string) : void {
        this.result = this._calculatorService.multiply(parseInt(first) , parseInt(second));
    }

    onAddition(first:string,second:string) : void {
        this.result = this._calculatorService.addition(parseInt(first) , parseInt(second));
    }

}