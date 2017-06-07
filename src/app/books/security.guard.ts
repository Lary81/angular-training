import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SecurityGuard implements CanActivate {

	constructor(private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let id = +route.paramMap.get('id')
		if (!id) {
			return false
		}
		if (id > 2) {
			let redirect = route.data['securityRedirect']
			this.router.navigate([redirect])
			return false
		}
		return true
	}

}