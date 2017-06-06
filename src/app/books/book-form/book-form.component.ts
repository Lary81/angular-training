import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'la-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  book = {}
  @Output('save')
  onSave = new EventEmitter()
  @Output('cancel')
  onCancel = new EventEmitter()
  genres = ["Adventure", "Horror", "Drama", "Romans"]
  rating = [1, 2, 3, 4, 5]

  save(bookForm) {
    if (bookForm.valid) {
      this.onSave.emit(this.book);
    }
  }

}
