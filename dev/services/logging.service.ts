//Technically our service are injectable even without @Injectable. It is done to avoid errors and warning

import {Injectable} from "angular2/core";


@Injectable()
export class LoggingService{
    log(message:string):void{
        console.log(message);
    }
}