import { RouterModule } from '@angular/router';

import { BooksComponent } from '../books/books/books.component';
import { BooksListComponent } from '../books/books-list/books-list.component';

const routesConfig = [
	{
		path: 'books', component: BooksComponent
	},
	{
		path: 'books/list', component: BooksListComponent
	},
]

export const routerModule = RouterModule.forChild(routesConfig)