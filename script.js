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

    getBook(title){
        return this.books.find((book) => book.title === title)
    }
}

const library = new Library()

const createBook = (book) => {
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
    removeBtn.className = "book-button remove"

    readBtn.onclick = toggleRead

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    removeBtn.textContent = "remove"

    if(book.readed){
        readBtn.textContent = "readed"
        readBtn.className = "book-button read"
    }else{
        readBtn.textContent = "not readed"
        readBtn.className = "book-button not-read"
    }

    bookCard.append(title, author, pages, readBtn, removeBtn)
    book_area.appendChild(bookCard)
}

const newBook = new Book("Percy Jackson", "Rick Riordan", "264", false)

const updateBookList = () => {
    book_area.innerHTML = ""
    for (let book of library.books){
        createBook(book)
    }
}

const toggleRead = (e) => {
    console.log(e)
    const title = e.target.parentNode.firstChild.innerHTML
    
    const book = library.getBook(title)

    if(book.readed == false) { book.readed = true }
    else{ book.readed = false}
    updateBookList()
}

library.addBook(newBook)

updateBookList()