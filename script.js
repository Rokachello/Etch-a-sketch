  
  const gridContainer = document.querySelector('.grid-container')
  var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
  let size = slider.value;
  checkInput(size)
  output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value
  document.getElementById(`xxx`).style.backgroundColor = "Red"


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  clearGrid()
    size = slider.value
    output.innerHTML = slider.value + " x " + slider.value;
    checkInput(size)
}


  
// color change on hover
function addColorChangeOnHover(){
const squareBoxes = document.querySelectorAll(`.box`);
console.log(squareBoxes)
squareBoxes.forEach((box) =>
    box.addEventListener(`mouseover`, () =>
    {
        
        //box.classList.add(`change-color`)
        let color = generateRandomColor()
        box.style.backgroundColor = color
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
  

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

