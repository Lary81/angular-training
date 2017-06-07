import { RouterModule } from '@angular/router';

import { BooksPanelComponent } from '../books/books-panel/books-panel.component';
import { BooksListComponent } from '../books/books-list/books-list.component';

const routesConfig = [
	{
		path: 'books', component: BooksPanelComponent
	},
	{
		path: 'books/list', component: BooksListComponent, data: { isProd: false }
	},
]

export const routerModule = RouterModule.forChild(routesConfig)