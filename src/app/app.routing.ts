import { RouterModule } from '@angular/router';

const routesConfig = [
	{
		path: '**', redirectTo: 'books'
	}
]

export const routerModule = RouterModule.forRoot(routesConfig, {
	enableTracing: true
})