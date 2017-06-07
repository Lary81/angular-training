import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'la-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  navigateHome() {
    this.router.navigate(['/'])
  }

}
