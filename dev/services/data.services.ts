
import {Injectable} from "angular2/core";
@Injectable()


export  class DataService {
    private _data = ['Summer','Winter','Warm','Cold'];


    getRandomString() : string{
        let rndNum : number = Math.floor(Math.random() * this._data.length);
        return this._data[rndNum];
    }

    insert(value : string) :void{
        this._data.push(value);
    }
}