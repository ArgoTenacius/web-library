let myLibrary = [];

function Book(title, author, pages, finished){
    this.title = title
    this.author = author
    this.pages = pages
    this.finished = finished
}

function addBookToLibrary(title, author, pages, finished){
    const newBook = new Book(title, author, pages, finished)
    myLibrary.push(newBook)
    console.log(myLibrary)
}

addBookToLibrary("Percy Jackson", "Rick Riordan", 250, true)