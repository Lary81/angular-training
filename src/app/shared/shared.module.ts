import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { HighlightDirective } from './highlight.directive';
import { RepeatDirective } from './repeat.directive';
import { UpperCasePipe } from './upper-case.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarsComponent,
    HighlightDirective,
    RepeatDirective,
    UpperCasePipe
  ],
  exports: [
    StarsComponent,
    HighlightDirective,
    RepeatDirective,
    UpperCasePipe
  ]
})
export class SharedModule { }
