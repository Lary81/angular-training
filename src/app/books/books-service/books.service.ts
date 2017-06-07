import { Observable } from 'rxjs/Rx';
import { Book } from '../book';

export interface BooksService {

	getAll(): Observable<[Book]>

	getById(id: number): Observable<Book>

	save(book: Book): Observable<any>

	update(book: Book): Observable<any>

}