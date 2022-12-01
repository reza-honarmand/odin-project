let myLibrary = []


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

let btn = document.getElementById('btnID')

btn.addEventListener('click', (e) => {

    for (let i = 0; i < myLibrary.length;i++){
        const newContent = document.createTextNode("")

        let div = document.createElement("div")
        div.className = "book"

        let cont = document.createElement("div")
        cont.className = "container"
        div.appendChild(cont)

        
        let title = document.createElement("div")
        title.className = "title"
        newContent.nodeValue = myLibrary[i].title
        title.textContent = newContent.nodeValue
        cont.appendChild(title)    

        let author = document.createElement("div")
        author.className = "author"
        newContent.nodeValue = myLibrary[i].author
        author.textContent = newContent.nodeValue
        cont.appendChild(author)

        
        
        // document.body.appendChild(div)  
        document.getElementById("view").appendChild(div)
    }

})

