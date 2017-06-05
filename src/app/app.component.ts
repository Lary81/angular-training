import { Component } from '@angular/core';

@Component({
  selector: 'la-hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   selected = {}
   edited = null

  titleSize = 24

  get authorsStyle() {
    return { color: 'gray', letterSpacing: '2px' }
  }

  select(book) {
    this.selected = book
    this.edited = Object.assign({}, book)
  }

  save() {
    Object.assign(this.selected, this.edited)
    this.reset()
  }

  reset() {
    this.selected = {}
    this.edited = null
  }

  cancel() {
    this.reset()
  }

  books = [
    {
      id: 'book-1410',
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      favourite: true
    },
     {
      id: 'book-1410',
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      favourite: true
    },
     {
      id: 'book-1410',
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      favourite: true
    },
     {
      id: 'book-1410',
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      favourite: true
    },
    {
      id: 'book-1411',
      title: 'ReactJS in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      favourite: true
    }
  ]
}
