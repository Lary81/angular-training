import { Route, RouterModule } from '@angular/router';

const routesConfig: [Route] = [
	{
		path: 'lazy', loadChildren: './books/books.module#BooksModule'
	},
	{
		path: '**', redirectTo: 'lazy/books'
	}
]

export const routerModule = RouterModule.forRoot(routesConfig, {
	enableTracing: true
})