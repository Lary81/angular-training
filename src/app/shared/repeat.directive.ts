import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[laRepeat]'
})
export class RepeatDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input()
  set laRepeat(times: number) {
    for (let index = 0; index < times; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
    //this.viewContainer.clear()
  }

}
