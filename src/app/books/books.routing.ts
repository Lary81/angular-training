import { SecurityGuard } from './security.guard';
import { BookResolver } from './book.resolver';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCardComponent } from './book-card/book-card.component';
import { Route, RouterModule } from '@angular/router';

import { BooksPanelComponent } from '../books/books-panel/books-panel.component';
import { BooksListComponent } from '../books/books-list/books-list.component';

const routesConfig: [Route] = [
	{
		path: 'books', component: BooksPanelComponent
	},
	{
		path: 'books-list', component: BooksListComponent,
		children: [
			{
				path: ':id', component: BookFormComponent,
				resolve: { book: BookResolver },
				canActivate: [SecurityGuard],
				data: { securityRedirect: '/' }
			}
		]
	},
	{
		path: '**', redirectTo: 'books'
	}
]

export const routerModule = RouterModule.forChild(routesConfig)