let bookArea = document.getElementById("book_area")
let myLibrary = []

function bookDisplay(book){
    const __book = document.createElement("book")
    const __title = document.createElement("h1")
    const __author = document.createElement("h6")
    const __pages = document.createElement("h4")

    __title.innerText = book.title
    __author.innerText = book.author
    __pages.innerText = `pages: ${book.pages}`

    __book.className = "book"
    __title.className = "title"
    __author.className = "author"
    __pages.className = "pages"

    bookArea.appendChild(__book)
    __book.appendChild(__title)
    __book.appendChild(__author)
    __book.appendChild(__pages)
}

function book(title, author, pages, readed){
    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed
}

function addBook(title, author, pages, readed){
    newBook = new book(title, author, pages, readed)
    bookDisplay(newBook)
    myLibrary.push(newBook)
}

addBook('Percy Jackson', 'Rick Riordan', 250, true)
//addBook('The world enemy', 'idk', 300, true)

console.log(myLibrary)
