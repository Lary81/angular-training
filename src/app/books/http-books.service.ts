import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http } from '@angular/http';
import { BooksService } from './books.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpBooksService implements BooksService {

  private baseUrl = "http://localhost:3000/books"

  constructor(private http: Http) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl)
      .map(responese => responese.json())
      .do(books => console.log(books))
  }

  save(book: any): Observable<any> {
    return this.http.post(this.baseUrl, book)
  }
  
  update(book: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${book.id}`, book)
  }

}
