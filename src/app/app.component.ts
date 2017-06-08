import { Component } from '@angular/core';

@Component({
  selector: 'la-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  sayHello() {
    this.title  = 'Hello!';
  }
}
