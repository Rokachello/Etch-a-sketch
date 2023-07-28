
let size = +prompt("Input grid size")
const gridContainer = document.querySelector('.grid-container')

// checks user input and creates correct grid.
checkInput(size)




// functions

function createGrid(gridSize){
    for(let i = 0;  i<gridSize; i++){
    const row = document.createElement(`div`);
    row.classList.add(`row`);
    gridContainer.appendChild(row)
    
        for(let j=0; j<gridSize; j++){
    
    const box = document.createElement('div');
    box.classList.add('box');
    row.appendChild(box);
        }
    }
    }
    
function checkInput(input){
   
 if(input>50){
        createGrid(50)
    }
    else if(input<2){
        createGrid(2)
    }
    else {createGrid(input)}
}


