import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpBooksService } from './http-books.service'
import { BooksService } from './books.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent
  ],
  providers: [
   // ArrayBooksService
   { provide: 'BooksService', useClass: HttpBooksService }

  //  { provide: BooksService, useFactory: (books) => {
  //     return new BooksService(books)
  //  }, deps: ['BooksData'] }
  ],
  exports: [
    BookCardComponent,
    BookFormComponent
  ]
})
export class BooksModule { }
