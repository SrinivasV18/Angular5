import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') over() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.3em');
    this.renderer.addClass(this.el.nativeElement, 'rotate');
    //console.log('over called....');
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseout') out() {
    this.renderer.removeClass(this.el.nativeElement, 'rotate');
    //console.log('out called...');
    console.log(this.el.nativeElement);
  }

}
