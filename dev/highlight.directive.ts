
import {Directive} from "angular2/core"
import {ElementRef} from "angular2/core";
import {OnInit} from "angular2/core";
import {Renderer} from "angular2/core";

@Directive({

    // this is name definition of directive
    selector : '[myHighlight]',

})

export class HighlightDirective implements  OnInit{

    private _defaultColor:string = 'green';
    private _elementRef : ElementRef;
    private _renderer : Renderer;

    constructor(_elementRef: ElementRef,_renderer : Renderer){
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }

    ngOnInit():any {
        //this._elementRef.nativeElement.style.background = this._defaultColor;
        //this._renderer.setElementStyle(this._elementRef, 'background-color' ,this._defaultColor);
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color' ,this._defaultColor);
    }

/*
*
* Since beta.1 Renderer doesn't take an ElementRef anymore, but a nativeElement,
* so your Renderer line adding the background color should look like this
*
* */
}