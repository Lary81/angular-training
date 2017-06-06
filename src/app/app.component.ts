import { Component } from '@angular/core';

import { BooksService } from '../app/books/books.service'

@Component({
  selector: 'la-hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = {}
  edited = null

  constructor(private booksService: BooksService) {
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
