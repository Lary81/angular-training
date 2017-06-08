
import { SecurityService } from '../security.service';
import { PRIVACY_PUBLIC } from 'tslint/lib/rules/completedDocsRule';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'la-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  text = ""
  @Input()
  name: string
  @Output()
  onSayHello = new EventEmitter()

  constructor(private securityService: SecurityService) {
  }

  sayHello() {
    this.onSayHello.emit(this.name)
  }

  ngOnInit(): void {
    this.securityService.login("test", "test")
    this.text = this.securityService.isAuthenticated ? "" : "Please log in..."
  }

}
