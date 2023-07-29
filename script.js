  
  const gridContainer = document.querySelector('.grid-container')
  let size = 10;
  createGrid();
  
  
  
  // checks user input and creates correct grid.
  const sizeButton = document.querySelector('.size-button');
        sizeButton.addEventListener(`click`, () =>
        {
            clearGrid()
            size = +prompt("Input grid size")
            checkInput(size)
           
        })


 

// color change on hover
function addColorChangeOnHover(){
const squareBoxes = document.querySelectorAll(`.box`);
console.log(squareBoxes)
squareBoxes.forEach((box) =>
    box.addEventListener(`mouseover`, () =>
    {
        box.classList.add(`change-color`)
    }
    ))
}

  


// functions


function gridSize(gridSize){
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
        gridSize(50)
    }
    else if(input<2){
        gridSize(2)
    }
    else {gridSize(input)}
    addColorChangeOnHover()
}


function createGrid(){
     size = +prompt("Input grid size")
            checkInput(size);
           
            
  }

  function clearGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
      row.remove();
    });
  }
  


