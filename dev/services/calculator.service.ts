
import {Injectable} from "angular2/core";
@Injectable()

export class CalculatorService{

    multiply(first:number,second : number) : number {
        return first *second;
    }

    addition(first:number,second:number) : number {
        return first + second;
    }
}