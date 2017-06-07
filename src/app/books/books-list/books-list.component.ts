import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'la-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  books: Observable<[Book]>

  constructor( @Inject('BooksService') private booksService: BooksService, activatedRoute: ActivatedRoute) {
    this.books = this.booksService.getAll()
    console.log(activatedRoute.snapshot.data)
  }
  
}
