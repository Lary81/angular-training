import { Component, Inject } from '@angular/core';

import { BooksService } from '../app/books/books.service'

@Component({
  selector: 'la-hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,providers: []
})
export class AppComponent {

  selected = {}
  edited = null

  // @Inject jest wymagane poniewaz uzyliśmy interfejsu
  constructor(@Inject('BooksService') private booksService: BooksService) {
  }

  select(book) {
    this.selected = book
    this.edited = Object.assign({}, book)
  }

  save() {
    if (this.edited.id) {
      this.booksService.update(this.edited)
    } else {
      this.booksService.save(this.edited)
    }
    this.reset()
  }

  reset() {
    this.selected = {}
    this.edited = null
  }

  cancel() {
    this.reset()
  }

  get books() {
    return this.booksService.getAll()
  }

}
