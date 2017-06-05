import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent
  ],
  exports: [
    BookCardComponent,
    BookFormComponent
  ]
})
export class BooksModule { }
