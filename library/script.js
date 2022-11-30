let myLibrary = [];

function Book(title,author,pages,status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.toStr = function(){
        console.log(title)
    }

}

function addBookToLibrary(title,author,pages,status) {
  let book = new Book(title,author,pages,status)
  myLibrary.push(book)
}

addBookToLibrary('Hobbit','Tolkien',255,'read')
addBookToLibrary('Lord of the Rings','Tolkien',255,'read')

// // console.log(myLibrary[0].toStr)
// myLibrary[0].toStr()
// myLibrary[1].toStr()

for (let i = 0; i < myLibrary.length;i++){
    myLibrary[i].toStr()
}