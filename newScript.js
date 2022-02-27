const book_area = document.getElementById("book_area")

class Book {
    constructor(title, author, page, readed){
        this.title = title
        this.author = author
        this.page = page
        this.readed = readed
    }
}

class Library{
    constructor(){
        this.bookList = []
    }

    addBook(newBook) {
        this.bookList.push(newBook)
    }
}

//#region CreateBookConfig
const CreateBookConfig = (card) =>{
    const bookForm = document.createElement("form")
    const inputDiv = document.createElement("div")
    const submitDiv = document.createElement("div")
    const titleInput = document.createElement("input")
    const authorInput = document.createElement("input")
    const pagesInput = document.createElement("input")
    const readedLabel = document.createElement("label")
    const readedInput = document.createElement("input")
    const submitInput = document.createElement("input")

    bookForm.className = "book-config"
    submitDiv.className = "book-submit"
    
    titleInput.type = "text"
    authorInput.type = "text"
    pagesInput.type = "number"
    readedInput.type = "checkbox"
    submitInput.type = "submit"


    readedInput.value = "read"
    submitInput.value = "Submit"

    readedLabel.for = "read"

    readedLabel.textContent = "Already readed it ?"

    titleInput.placeholder = "title"
    authorInput.placeholder = "author"
    pagesInput.placeholder = "pages"

    readedLabel.append(readedInput)
    inputDiv.append(titleInput, authorInput, pagesInput, readedLabel)
    submitDiv.append(submitInput)
    bookForm.append(inputDiv, submitDiv)
    card.append(bookForm)
}
//#endregion

//#region CreateBook
const CreateBook = (book) => {
    const contentDiv =  document.createElement("div")
    const infoDiv = document.createElement("div")
    const titleH1 = document.createElement("h1")
    const authorH4 = document.createElement("h4")
    const pagesH5 = document.createElement("h5")
    const buttonDiv = document.createElement("div")
    const readedBtn = document.createElement("button")
    const removeBtn = document.createElement("button")

    contentDiv.className = "book-content"
    readedBtn.className = "book-readed"
    removeBtn.className = "book-remove"

    readedBtn.type = "button"
    removeBtn.type = "button"

    infoDiv.append(titleH1, authorH4, pagesH5)
    buttonDiv.append(readedBtn, removeBtn)
    contentDiv.append(infoDiv, buttonDiv)
} 
//#endregion

const CreateBookCard = () => {
    const bookCard = document.createElement("section")
    bookCard.className = "book-card box-shadow"

    CreateBookConfig(bookCard)

    book_area.append(bookCard)
}

CreateBookCard()
const library = new Library()
const newBook = new Book("Percy jackson", "Rick Riordan", 250, false)
library.addBook(newBook)
console.log(library.bookList)
