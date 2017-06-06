import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BooksModule } from './books/books.module';
import { AppComponent } from './app.component';
import booksData from './books.data';
import { routerModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    routerModule
  ],
  providers: [
    { provide: 'BooksData', useValue: booksData }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
