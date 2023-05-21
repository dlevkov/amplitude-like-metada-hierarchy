import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[amplitudeId]',
})
export class AmplitudeIdDirective {
  @Input() amplitudeId = 'default value';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onMouseClick() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'data-amplitude-id',
      this.amplitudeId
    );
  }
}
