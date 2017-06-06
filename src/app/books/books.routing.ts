import { RouterModule } from '@angular/router';

import { BooksPanelComponent } from '../books/books-panel/books-panel.component';
import { BooksListComponent } from '../books/books-list/books-list.component';

const routesConfig = [
	{
		path: 'books', component: BooksPanelComponent
	},
	{
		path: 'books/list', component: BooksListComponent
	},
]

export const routerModule = RouterModule.forChild(routesConfig)