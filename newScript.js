const book_area = document.getElementById("book_area")
const add_button = document.getElementById("add_button")

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
const library = new Library()


const submitBook = (title, author, pages, readed) => {
    const newBook = new Book(title, author, pages, readed)
    library.addBook(newBook)
    console.log(library.bookList)
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

    titleInput.required = true
    authorInput.required = true
    pagesInput.required = true
    
    readedInput.type = "checkbox"
    submitInput.type = "submit"

    submitInput.onclick = () => {
        const requiredArray = [titleInput.value, authorInput.value, pagesInput.value]
        let complete = true

        const checkRequired = (value) => {
            if(value === ""){
                return false
            }
        }

        for(var i = 0; i < 3; i++){
            if(checkRequired(requiredArray[i]) == false ) { complete = false }
        }
        
        if(complete) { 
            submitBook(titleInput.value, authorInput.value, pagesInput.value, readedInput.checked)
            bookForm.innerHTML = ""
            CreateBook(bookForm, titleInput.value, authorInput.value, pagesInput.value, readedInput.checked)
        }
    }

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
const CreateBook = (card, title, author, pages, readed) => {
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

    titleH1.textContent = title
    authorH4.textContent = author
    pagesH5.textContent = `pages: ${pages}`
    removeBtn.textContent = "remove"
    readedBtn.checked = readed

    if(readedBtn.checked) { 
        readedBtn.textContent = "finished" 
        readedBtn.className = "book-readed"
    } else { 
        readedBtn.textContent = "not finished"
        readedBtn.className = "book-notreaded"
    }

    readedBtn.type = "button"
    removeBtn.type = "button"

    infoDiv.append(titleH1, authorH4, pagesH5)
    buttonDiv.append(readedBtn, removeBtn)
    contentDiv.append(infoDiv, buttonDiv)
    card.append(contentDiv)
} 
//#endregion

const CreateBookCard = () => {
    const bookCard = document.createElement("section")
    bookCard.className = "book-card box-shadow"

    CreateBookConfig(bookCard)

    book_area.append(bookCard)
}

CreateBookCard()
add_button.onclick = CreateBookCard

/*
const newBook = new Book("Percy jackson", "Rick Riordan", 250, false)
library.addBook(newBook)
console.log(library.bookList)
*/