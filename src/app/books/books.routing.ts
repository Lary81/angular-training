import { BookResolver } from './book.resolver';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCardComponent } from './book-card/book-card.component';
import { RouterModule } from '@angular/router';

import { BooksPanelComponent } from '../books/books-panel/books-panel.component';
import { BooksListComponent } from '../books/books-list/books-list.component';

const routesConfig = [
	{
		path: 'books', component: BooksPanelComponent
	},
	{
		path: 'books-list', component: BooksListComponent, data: { isProduction: false }
	},
	{
		path: 'books-list/:id', component: BookFormComponent, resolve: {
			book: BookResolver
		}
	}
]

export const routerModule = RouterModule.forChild(routesConfig)