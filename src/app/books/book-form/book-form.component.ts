import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'la-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {

  @Input()
  book = {}
  @Output()
  onSave = new EventEmitter()
  @Output('cancel')
  onCancel = new EventEmitter()

}
