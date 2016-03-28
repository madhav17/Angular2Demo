import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {DataService} from "./services/data.services";

//only 1 instance will be created
bootstrap(AppComponent,[DataService]);
