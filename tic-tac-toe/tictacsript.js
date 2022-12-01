const tilesList = []

function tile(number) {
    this.number = number
    // this.index = document.getElementById(number)
    document.getElementById(number).textContent = '0'
    
    this.sayName = function() {
      console.log(number)
    }

    this.get = function(){
        return document.getElementById(number)
    }
}


for(let i=1; i<10; i++){
    let t = new tile(i)
    tilesList.push(t)
}

function checkWin(){
    //x win
    //  row
    if(tilesList[0].get().textContent=="X" && tilesList[0].get().textContent==tilesList[1].get().textContent && tilesList[1].get().textContent==tilesList[2].get().textContent){
        console.log('WIN')
    }
    if(tilesList[3].get().textContent=="X" && tilesList[3].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[5].get().textContent){
        console.log('WIN')
    }
    if(tilesList[6].get().textContent=="X" && tilesList[6].get().textContent==tilesList[7].get().textContent && tilesList[7].get().textContent==tilesList[8].get().textContent){
        console.log('WIN')
    }
    //  diagonal
    if(tilesList[0].get().textContent=="X" && tilesList[0].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[8].get().textContent){
        console.log('WIN')
    }
    if(tilesList[6].get().textContent=="X" && tilesList[6].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[2].get().textContent){
        console.log('WIN')
    }
    //  col
    if(tilesList[0].get().textContent=="X" && tilesList[0].get().textContent==tilesList[3].get().textContent && tilesList[3].get().textContent==tilesList[5].get().textContent){
        console.log('WIN')
    }
    if(tilesList[1].get().textContent=="X" && tilesList[1].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[7].get().textContent){
        console.log('WIN')
    }
    if(tilesList[2].get().textContent=="X" && tilesList[2].get().textContent==tilesList[5].get().textContent && tilesList[5].get().textContent==tilesList[8].get().textContent){
        console.log('WIN')
    }

    //y win
    if(tilesList[0].get().textContent=="Y" && tilesList[0].get().textContent==tilesList[1].get().textContent && tilesList[1].get().textContent==tilesList[2].get().textContent){
        console.log('WIN')
    }
    if(tilesList[3].get().textContent=="Y" && tilesList[3].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[5].get().textContent){
        console.log('WIN')
    }
    if(tilesList[6].get().textContent=="Y" && tilesList[6].get().textContent==tilesList[7].get().textContent && tilesList[7].get().textContent==tilesList[8].get().textContent){
        console.log('WIN')
    }
    //  diagonal
    if(tilesList[0].get().textContent=="Y" && tilesList[0].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[8].get().textContent){
        console.log('WIN')
    }
    if(tilesList[6].get().textContent=="Y" && tilesList[6].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[2].get().textContent){
        console.log('WIN')
    }
    //  col
    if(tilesList[0].get().textContent=="Y" && tilesList[0].get().textContent==tilesList[3].get().textContent && tilesList[3].get().textContent==tilesList[5].get().textContent){
        console.log('WIN')
    }
    if(tilesList[1].get().textContent=="Y" && tilesList[1].get().textContent==tilesList[4].get().textContent && tilesList[4].get().textContent==tilesList[7].get().textContent){
        console.log('WIN')
    }
    if(tilesList[2].get().textContent=="Y" && tilesList[2].get().textContent==tilesList[5].get().textContent && tilesList[5].get().textContent==tilesList[8].get().textContent){
        console.log('WIN')
    }
}

//main

for(let i=0; i<tilesList.length; i++){
    let tile = tilesList[i].get()
    tile.addEventListener('click',() => {
        console.log('click happened')

        let x = document.createTextNode("X")
        let y = document.createTextNode("Y")
        if(tile.textContent == "0"){
            tile.textContent = x.nodeValue
        }

        else if(tile.textContent == "X"){
            tile.textContent = y.nodeValue
        }
        
        else if(tile.textContent == "Y"){
            tile.textContent = x.nodeValue
        }

        checkWin()
    })
}

// for(let i=0; i<tilesList.length; i++){
//     let tile = tilesList[i].get()
//     tile.addEventListener('click',() => {
//         console.log('yoohoo')
//     })
// }


