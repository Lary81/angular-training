import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { BooksModule } from './books/books.module';
import { AppComponent } from './app.component';
import booksData from './books.data';
import { StarsComponent } from './shared/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksModule
  ],
  providers: [
    { provide: 'BooksData', useValue: booksData }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
