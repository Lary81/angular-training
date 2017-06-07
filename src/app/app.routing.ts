import { Route, RouterModule } from '@angular/router';

const routesConfig: [Route] = [
	{
		path: '', loadChildren: './books/books.module#BooksModule'
	},
	{
		path: '**', redirectTo: ''
	}
]

export const routerModule = RouterModule.forRoot(routesConfig, {
	enableTracing: true
})