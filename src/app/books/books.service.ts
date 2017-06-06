import { Inject, Injectable, Optional } from '@angular/core';

@Injectable()
export class BooksService {

  private books = []

  constructor(@Optional() @Inject('BooksData') books = []) {
      this.books = books
  }

  getAll() {
    return this.books
  }

  save(book) {
    book.id = this.nextId()
    this.books.push(book);
  }

  update(book) {
    let index = this.findIndex(book.id)
    if (index != -1) {
      this.books[index] = book
    }
  }

  private findIndex(id: string) {
    return this.books.findIndex(book => id == book.id)
  }

  private nextId() {
    return `book-${Date.now()}`
  }

}
