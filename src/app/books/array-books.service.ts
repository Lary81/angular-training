import { Book } from './book';
import { Observable } from 'rxjs/Rx';
import { BooksService } from './books.service';
import { Inject, Injectable, Optional } from '@angular/core';

@Injectable()
export class ArrayBooksService implements BooksService {

  private books = []

  constructor( @Optional() @Inject('BooksData') books = []) {
    this.books = books
  }

  getById(id: number): Observable<Book> {
    throw new Error("Method not implemented.");
  }

  getAll(): Observable<[Book]> {
    return Observable.of(this.books)
  }

  save(book): Observable<any> {
    book.id = this.nextId()
    this.books.push(book);
    return Observable.empty()
  }

  update(book): Observable<any> {
    let index = this.findIndex(book.id)
    if (index != -1) {
      this.books[index] = book
    }
    return Observable.empty()
  }

  private findIndex(id: string) {
    return this.books.findIndex(book => id == book.id)
  }

  private nextId() {
    return `book-${Date.now()}`
  }

}
