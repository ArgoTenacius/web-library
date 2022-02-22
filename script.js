let myLibrary = [];
const book_area = document.getElementById("book_area")

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

function newBook(){
    const __newBook = document.createElement("div")
    const __newBook_config = document.createElement("form")
    const __title_input = document.createElement("input")
    const __author_input = document.createElement("input")
    const __pages_input = document.createElement("input")
    const __readed = document.createElement("div")
    const __readed_checkbox = document.createElement("input")

    __newBook.className = "newbook"
    __newBook_config.className = "newbook-config"

    __title_input.placeholder = "Title"
    __author_input.placeholder = "Author"
    __pages_input.placeholder = "Pages:"

    __readed.className = "readed"
    __readed.innerText = "Already readed ?"
    __readed_checkbox.type = "checkbox"
    __readed.appendChild(__readed_checkbox)

    __newBook.appendChild(__newBook_config)
    __newBook_config.append(__title_input, __author_input, __pages_input, __readed)
    book_area.appendChild(__newBook)
}

addBookToLibrary("Percy Jackson", "Rick Riordan", 250, true)