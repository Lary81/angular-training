import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'la-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input()
  book
  @Output('save')
  onSave = new EventEmitter()
  @Output('cancel')
  onCancel = new EventEmitter()
  genres = ["Adventure", "Horror", "Drama", "Romans"]
  rating = [1, 2, 3, 4, 5]

  editable = true

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (!this.book) {
      let book = this.route.snapshot.data.book
      this.editable = false
      this.book = book || {}
    }
  }

  save(bookForm) {
    if (bookForm.valid) {
      this.onSave.emit(this.book);
    }
  }

}
