import { Observable } from 'rxjs/Rx';
import { Inject } from '@angular/core';
import { BooksService } from './books-service/books.service';
import { Book } from './book';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export class BookResolver implements Resolve<Book> {

	constructor(@Inject('BooksService') private booksService: BooksService) {
	}
	
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
		return this.booksService.getById(+route.paramMap.get('id'))
	}

}