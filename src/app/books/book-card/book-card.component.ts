import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'la-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
  //inputs: ['book', 'isSelected']
})
export class BookCardComponent {

  @Input()
  book = {}
  @Input()
  isSelected = false
  @Output('selected')
  onSelect = new EventEmitter()

  get authorsStyle() {
    return { color: 'gray', letterSpacing: '2px' }
  }

  select() {
    this.onSelect.emit(this.book)
  }

}
