import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {

  private authenticated = false

  login(user: string, password: string): Promise<boolean> {
    return Promise.resolve(this.authenticated = user.length > 0 && password.length > 0)  
  }

  get isAuthenticated(): boolean {
    return this.authenticated
  }

}
