import { EmailValidator } from './email.validator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { HighlightDirective } from './highlight.directive';
import { RepeatDirective } from './repeat.directive';
import { UpperCasePipe } from './upper-case.pipe';

import { EmailBlackListService } from './email-black-list.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarsComponent,
    HighlightDirective,
    RepeatDirective,
    UpperCasePipe,
    EmailValidator
  ],
  exports: [
    StarsComponent,
    HighlightDirective,
    RepeatDirective,
    UpperCasePipe,
    EmailValidator
  ],
  providers: [
    EmailBlackListService
  ]
})
export class SharedModule { }
