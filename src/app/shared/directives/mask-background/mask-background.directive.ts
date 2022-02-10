import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[vgMaskBackground]',
})
export class MaskBackgroundDirective implements AfterViewInit {
  @Input() vgMaskBackground?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'mask',
      `url(${this.vgMaskBackground}) no-repeat center / contain`
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '-webkit-mask',
      `url(${this.vgMaskBackground}) no-repeat center / contain`
    );
  }
}
