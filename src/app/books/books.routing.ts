import { RouterModule } from '@angular/router';

import { BooksComponent } from '../books/books/books.component';

const routesConfig = [
	{
		path: 'books', component: BooksComponent
	}
]

export const routerModule = RouterModule.forChild(routesConfig)