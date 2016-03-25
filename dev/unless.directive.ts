import {Directive} from "angular2/core"
import {TemplateRef} from "angular2/core";
import {ViewContainerRef} from "angular2/core";

@Directive({

    selector : '[myUnless]',
    inputs :['myUnless']


})


export  class UnlessDirective{

    private _templateRef : TemplateRef;
    private _viewContainerRef : ViewContainerRef;


    constructor(_template:TemplateRef,__viewContainerRef:ViewContainerRef){
        this._templateRef = _template;
        this._viewContainerRef = __viewContainerRef;
    }

    set myUnless(condition : boolean){
        if(!condition){
            this._viewContainerRef.createEmbeddedView(this._templateRef)
        }else {
            this._viewContainerRef.clear()
        }
    }

}