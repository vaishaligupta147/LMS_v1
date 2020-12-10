import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector: '[coloringDirective]'
})

export class ColoringDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor="crimson";
        this.elementRef.nativeElement.style.color="white";
    }
}