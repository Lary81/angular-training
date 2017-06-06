export class Book {

	id: number
	title: string
	authors: string
	category: string
	favourite: boolean
	rating: number
	genre: string

	constructor(json) {
		this.id = json['id']
		this.title = json['title']
		this.authors = json['authors']
		this.category = json['category']
		this.favourite = json['favourite']
		this.rating = json['rating']
		this.genre = json['genre']
	}

}