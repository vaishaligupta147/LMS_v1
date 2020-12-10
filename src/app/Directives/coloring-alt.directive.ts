import { Directive, Renderer2, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColoringAlt]'
})
export class ColoringAltDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: String;
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) { }
  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
    this.background = 'indianred';
  }
  @HostListener('mouseenter') mousehover() {
    this.background = 'lightgreen';
  }
  @HostListener('mouseleave') mouseleave() {
    this.background = 'indianred';
  }
}
