
let size = +prompt("Input grid size")
const gridContainer = document.querySelector('.grid-container')

// checks user input and creates correct grid.
checkInput(size);

const xxx = document.querySelector(".test");
console.log(xxx)
xxx.addEventListener(`click`, () =>
{xxx.classList.add(`change-color`)}
)


const squareBoxes = document.querySelectorAll(`.box`);
console.log(squareBoxes)
squareBoxes.forEach((box) =>
    box.addEventListener(`mouseover`, () =>
    {
        box.classList.add(`change-color`)
    }
    ))


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



