const book_area = document.getElementById("book_area")

//#region constructors
class Book{
    constructor(title, author, pages, readed){
        this.title = title
        this.author = author
        this.pages = pages
        this.readed = readed
    }
}

class ConfigBook{
    constructor(title = "", author = "", pages = "", readed = false){
        this.title = title
        this.author = author
        this.pages = pages
        this.readed = readed
    }
}

class Library{
    constructor(){
        this.books = []
        this.configBooks = []
    }

    addBook(newBook) { 
        this.books.push(newBook) 
        console.log(this.books) 
    }

    addConfigBook(newConfigBook){
        this.configBooks.push(newConfigBook)
        console.log(this.configBooks)
        updateBookList()
    }

    getBook(title){
        return this.books.find((book) => book.title === title)
    }
}

const library = new Library()
//#endregion

//#region createNewBook (config)
const createNewBook = () =>{
    new_book = document.createElement("form")
    title_input = document.createElement("input")
    author_input = document.createElement("input")
    pages_input = document.createElement("input")
    readed_div = document.createElement("div")
    readed_check = document.createElement("input")
    submit_btn = document.createElement("button")

    new_book.className = "newbook"
    readed_div.className = "readed"
    submit_btn.className = "book-button submit"

    title_input.placeholder = "Title"
    author_input.placeholder = "Author"
    pages_input.placeholder = "Amount of pages"

    readed_div.textContent = "Already readed ?"
    submit_btn.textContent = "Submit"

    submit_btn.type = "button"
    readed_check.type = "checkbox"

    new_book.append(title_input, author_input, pages_input, readed_div, submit_btn)
    readed_div.append(readed_check)
    book_area.append(new_book)
}
//#endregion

//#region  createBook
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
//#endregion

//#region createAddBtn
const createAddBtn = () => {
    const add_button = document.createElement("div")
    const icon = document.createElement("img")

    add_button.className = "add-button"
    add_button.onclick = () =>{
        const newConfigBook = new ConfigBook()
        library.addConfigBook(newConfigBook)
    }

    icon.src = "https://img.icons8.com/ios/120/000000/plus--v1.png"

    add_button.appendChild(icon)
    book_area.appendChild(add_button)
}
//#endregion

const updateBookList = () => {
    book_area.innerHTML = ''
    for (let book of library.books){
        createBook(book)
    }
    for (let configBook of library.configBooks){
        createNewBook(configBook)
    }
    createAddBtn()
}

const toggleRead = (e) => {
    console.log(e)
    const title = e.target.parentNode.firstChild.innerHTML
    
    const book = library.getBook(title)

    if(book.readed == false) { book.readed = true }
    else{ book.readed = false}
    updateBookList()
}

//const newBook = new Book("Percy Jackson", "Rick Riordan", "264", false)
//library.addBook(newBook)

//updateBookList()

createAddBtn()

//#region copyrght
const copyright = document.getElementById("copyright-date")
const date = new Date()
copyright.textContent = date.getFullYear()
//#endregion