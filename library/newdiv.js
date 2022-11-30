let btn = document.getElementById('btnID')

btn.addEventListener('click', (e) => {
    const newContent = document.createTextNode("")

    let div = document.createElement("div")
    div.className = "book"

    let cont = document.createElement("div")
    cont.className = "container"
    div.appendChild(cont)

    
    let title = document.createElement("div")
    title.className = "title"
    newContent.nodeValue = "Title2"
    title.textContent = newContent.nodeValue
    cont.appendChild(title)    

    let author = document.createElement("div")
    author.className = "author"
    newContent.nodeValue = "Author2"
    author.textContent = newContent.nodeValue
    cont.appendChild(author)

    
    
    // document.body.appendChild(div)  
    document.getElementById("view").appendChild(div)
    
})