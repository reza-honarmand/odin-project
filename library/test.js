function Book(title,author,pages,status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    
    this.toStr = function() {
        console.log(title)
      }

}
  
const book1 = new Book('Hobbit','Tolkien',255,'read')

book1.toStr()

