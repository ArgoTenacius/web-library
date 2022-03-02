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

    removeBook(_title) {
        for (let i = 0; i < this.bookList.length; i++){
            if(this.bookList[i].title == _title){
                this.bookList.splice(i)
                break
            }
        }
    }

    getBookTitle(_title){
        for (let i = 0; i < this.bookList.length; i++){
            if(this.bookList[i].title == _title){
                return this.bookList[i].title
            }
        }
    }

    getBookID(_title){
        for (let i = 0; i < this.bookList.length; i++){
            if(this.bookList[i].title == _title){
                return this.bookList[i]
            }
        }    
    }
}

const library = new Library()

//#region CreateBookConfig
const CreateBookConfig = () =>{
    const card = document.createElement("section")
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
    card.className = "book-card box-shadow"
    
    titleInput.type = "text"
    authorInput.type = "text"
    pagesInput.type = "number"

    titleInput.required = true
    authorInput.required = true
    pagesInput.required = true
    
    readedInput.type = "checkbox"
    submitInput.type = "submit"

    readedInput.value = "read"
    submitInput.value = "Submit"

    readedLabel.for = "read"
    
    readedLabel.textContent = "Already readed it ?"

    titleInput.placeholder = "title"
    authorInput.placeholder = "author"
    pagesInput.placeholder = "pages"

    const checkInputs = () => {
        const requiredInput = [titleInput, authorInput, pagesInput]
        for (let i = 0; i < requiredInput.length; i++){
            if(requiredInput[i].value == ""){
                return false
            }else if(requiredInput[requiredInput.length - 1] !== ""){
                return true
            }
        }
    }
    
    submitInput.onclick = (e) => { 
        e.preventDefault()
        const complete = checkInputs()
        if(complete){
            if(titleInput.value !== library.getBookTitle(titleInput.value)){
                titleInput.placeholder = "title"
                titleInput.className = "book-submit"
                submitBook(titleInput.value, authorInput.value, pagesInput.value, readedInput.checked, card) 
            }else{
                titleInput.value = ""
                titleInput.placeholder = "Book already exist"
                titleInput.className = "book-submit red-placeholder"
            }
        }
    }

    readedLabel.append(readedInput)
    inputDiv.append(titleInput, authorInput, pagesInput, readedLabel)
    submitDiv.append(submitInput)
    bookForm.append(inputDiv, submitDiv)
    card.append(bookForm)
    book_area.append(card)
}
//#endregion

//#region CreateBook
const CreateBook = (book) => {
    const card = document.createElement("section")
    const contentDiv =  document.createElement("div")
    const infoDiv = document.createElement("div")
    const titleH1 = document.createElement("h1")
    const authorH4 = document.createElement("h4")
    const pagesH5 = document.createElement("h5")
    const buttonDiv = document.createElement("div")
    const readedBtn = document.createElement("button")
    const removeBtn = document.createElement("button")

    card.className = "book-card box-shadow"
    contentDiv.className = "book-content"
    readedBtn.className = "book-readed"
    removeBtn.className = "book-remove"

    titleH1.textContent = book.title
    authorH4.textContent = book.author
    pagesH5.textContent = `pages: ${book.page}`
    removeBtn.textContent = "remove"

    readedBtn.checked = book.checked

    const readedBtnUpdate = () => {
        if(readedBtn.checked) { 
            readedBtn.textContent = "finished" 
            readedBtn.className = "book-readed"
        } else { 
            readedBtn.textContent = "not finished"
            readedBtn.className = "book-notreaded"
        }
    }

    readedBtnUpdate()

    readedBtn.onclick = () => {
        if(readedBtn.className == "book-readed"){
            readedBtn.checked = false
        }else{
            readedBtn.checked = true
        }
        readedBtnUpdate()

        const bookID = library.getBookID(titleH1.textContent)
        bookID.readed = readedBtn.checked
        
    }

    readedBtn.type = "button"
    removeBtn.type = "button"
    
    removeBtn.onclick = (e) => { 
        library.removeBook(titleH1.textContent)
        book_area.removeChild(card)
    }

    infoDiv.append(titleH1, authorH4, pagesH5)
    buttonDiv.append(readedBtn, removeBtn)
    contentDiv.append(infoDiv, buttonDiv)
    card.append(contentDiv)
    book_area.append(card)
} 
//#endregion

CreateBookConfig()

const submitBook = (title, author, pages, readed, card) => {
    const newBook = new Book(title, author, pages, readed)
    library.addBook(newBook)
    card.parentNode.firstChild.innerHTML = CreateBook(newBook)
}