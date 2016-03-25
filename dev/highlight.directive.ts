
import {Directive} from "angular2/core"
import {ElementRef} from "angular2/core";
import {OnInit} from "angular2/core";
import {Renderer} from "angular2/core";

@Directive({

    // this is name definition of directive
    selector : '[myHighlight]',
    //we are creating alias to bind it with single directive name as a property
    //inputs : ['highlightColor : myHighlight'],

     //to bind multiple properties with directives
    inputs : ['highlightColor','mouseOverColor'],

    //host element can fire element and we can other things also
    host:{
        '(mouseenter)' : "onMouseEnter()",

        '(mouseleave)' : "onMouseLeave()"
    }

})

export class HighlightDirective implements  OnInit{

    private _defaultColor:string = 'green';
    private _elementRef : ElementRef;
    private _renderer : Renderer;
    highlightColor : string;
    mouseOverColor : string;

    constructor(_elementRef: ElementRef,_renderer : Renderer){
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }

    ngOnInit():any {
        this.highLight(this.highlightColor || this._defaultColor);
    }

    onMouseEnter():void {
        this.highLight(this.mouseOverColor);
    }

    onMouseLeave() : void {
        this.highLight(this.highlightColor || this._defaultColor);
    }

    highLight(color : string):void{
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color' ,color);
    }

}