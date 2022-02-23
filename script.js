const book_area = document.getElementById("book_area")

class Book{
    constructor(title, author, pages, readed){
        this.title = title
        this.author = author
        this.pages = pages
        this.readed = readed
    }
}

class Library{
    constructor(){
        this.books = []
    }

    addBook(newBook) { 
        this.books.push(newBook) 
        console.log(this.books) 
    }
}

const library = new Library()

const newBook = new Book("Percy Jackson", "Rick Riordan", "264", false)

library.addBook(newBook)

createBook = (book) => {
    const bookCard = document.createElement("div")
    const title = document.createElement("h1")
    const author = document.createElement("h3")
    const pages = document.createElement("h4")
    const readBtn = document.createElement("button")
    const removeBtn = document.createElement("button")

    bookCard.className = "book"
    title.className = "book-title"
    author.className = "book-author"
    pages.className = "book-author"
    readBtn.classList = "book-button read"
    removeBtn.classList = "book-button remove"

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    removeBtn.textContent = "remove"

    bookCard.append(title, author, pages, readBtn, removeBtn)
    book_area.appendChild(book)
}