import { StarsComponent } from '../shared/stars/stars.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpBooksService } from './http-books.service'
import { BooksService } from './books.service';
import { BooksComponent } from './books/books.component'
import { routerModule } from './books.routing';
import { BooksListComponent } from './books-list/books-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    routerModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksComponent,
    BooksListComponent
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
    BookFormComponent,
    BooksComponent
  ]
})
export class BooksModule { }
