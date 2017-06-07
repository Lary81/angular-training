import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { HighlightDirective } from './highlight.directive';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarsComponent,
    HighlightDirective,
    RepeatDirective
  ],
  exports: [
    StarsComponent,
    HighlightDirective,
    RepeatDirective
  ]
})
export class SharedModule { }
