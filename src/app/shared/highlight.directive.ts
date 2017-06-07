import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[laHighlight]'
})
export class HighlightDirective {

  @Input()
  color: string

  private ogrinalColor: string

  constructor(private element: ElementRef) {
    this.ogrinalColor = this.element.nativeElement.style.color
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || 'yellow')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(this.ogrinalColor)
  }

  private highlight(color: string) {
    this.element.nativeElement.style.color = color
  }

}
