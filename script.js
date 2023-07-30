  
  const gridContainer = document.querySelector('.grid-container')
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
  let size = slider.value;
  checkInput(size)
  output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
  clearGrid();
  size = slider.value;
  gridSize(size); // Add this line to create the new grid
}
  

// Random colored pixel on button click
const randomButton = document.querySelector('#random-color');
randomButton.addEventListener(`click`, () =>
    {
      const squareBoxes = document.querySelectorAll(`.box`);

        removeButtonColor();
        randomButton.style.backgroundColor = "Gold"

squareBoxes.forEach((box) =>
    box.addEventListener(`mouseover`, () =>
    {
        let color = generateRandomColor()
        box.style.backgroundColor = color
        
    }
    ))
    })

    // Black pixel on button click
const blackButton = document.querySelector('#black-pixels');
blackButton.addEventListener(`click`, () =>
    {
      
      const squareBoxes = document.querySelectorAll(`.box`);

      removeButtonColor();
      blackButton.style.backgroundColor = "Gold"

squareBoxes.forEach((box) =>
    box.addEventListener(`mouseover`, () =>
    {
        let color = "Black"
        box.style.backgroundColor = color
    }
    ))
    })

    //eraser on button click
    const eraser = document.querySelector('#eraser');
    eraser.addEventListener(`click`, () =>
        {
          const squareBoxes = document.querySelectorAll(`.box`);

          removeButtonColor();
          eraser.style.backgroundColor = "Gold"
    
    squareBoxes.forEach((box) =>
        box.addEventListener(`mouseover`, () =>
        {
            let color = "#BED3E5"
            box.style.backgroundColor = color
        }
        ))
        })

        // clear grid
        const clear = document.querySelector(`#clear`);
        clear.addEventListener(`click`,() => 
        {
          const squareBoxes = document.querySelectorAll(`.box`);
          removeButtonColor();
          clear.style.backgroundColor = "Gold"

          squareBoxes.forEach((box) =>
          box.style.backgroundColor = `#BED3E5`
          )

        }
        )




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
   // addColorChangeOnHover()
    }
    
function checkInput(input){
 if(input>50){
        gridSize(50)
    }
    else if(input<2){
        gridSize(2)
    }
    else {gridSize(input)}
    
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

function removeButtonColor(){
  const buttons = document.querySelectorAll("button");
  
  buttons.forEach((button) =>
    button.style.background = "#BED3E5"
  )
}
