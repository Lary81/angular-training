import { Book } from '../book';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'la-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  book
  @Output('save')
  onSave = new EventEmitter()
  @Output('cancel')
  onCancel = new EventEmitter()
  genres = ["Adventure", "Horror", "Drama", "Romans"]
  rating = [1, 2, 3, 4, 5]

  editable = true

  constructor(private route: ActivatedRoute, router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let book = this.route.snapshot.data.book
        this.editable = false
        this.book = book || null
      }
    })
  }

  save(bookForm) {
    if (bookForm.valid) {
      this.onSave.emit(this.book);
    }
  }

}
