import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Component, Inject, OnInit } from '@angular/core';

import { BooksService } from '../books.service'
import { Book } from '../book'

@Component({
  selector: 'la-books',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent implements OnInit {

  selected = {}
  edited = null
  books: Observable<Book>
  searchForm = new FormGroup({ "query": new FormControl() })

  private booksSubject = new Subject()

  constructor(@Inject('BooksService') private booksService: BooksService) {
    this.books = this.booksSubject.asObservable()
  }

  ngOnInit(): void {
    this.refresh()
    let queryObservable = this.searchForm.get('query')
      .valueChanges
      .debounceTime(500)
      .startWith('')
    this.books = Observable.combineLatest(this.booksSubject, queryObservable, this.filterByTitle)
  }

  private filterByTitle(books, title) {
    return books.filter(book => book.title.indexOf(title) !== -1);
  }

  select(book) {
    this.selected = book
    this.edited = Object.assign({}, book)
  }

  save() {
    if (this.edited.id) {
      this.subscribe(this.booksService.update(this.edited))
    } else {
      this.subscribe(this.booksService.save(this.edited))
    }
    this.reset()
  }

  private subscribe(observable: Observable<Book>) {
    observable.subscribe(() => this.refresh())
  }

  private refresh() {
    this.booksService.getAll()
      .subscribe(books => this.booksSubject.next(books))
  }

  reset() {
    this.selected = {}
    this.edited = null
  }

  cancel() {
    this.reset()
  }

}
