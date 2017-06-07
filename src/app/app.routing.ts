import { Route, RouterModule } from '@angular/router';

const routesConfig: [Route]= [
	{
		path: '**', redirectTo: 'books'
	}
]

export const routerModule = RouterModule.forRoot(routesConfig, {
	enableTracing: true
})