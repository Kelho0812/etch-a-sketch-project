const slider = document.getElementById("myRange");
let output = document.getElementById("demo");
const gridContainer = document.querySelector(".gridContainer");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
};

let button = document.querySelector(".button");
button.addEventListener("click", () => {
    // clearGrid() //ENCONTRAR MANEIRA DE REMOVER TODOS OS DIVS ANTES DE CRIAR A GRID NOVA
    createGrid()
    paintGrid() 
});

function colorPicker() {
    let colorsArray = ["#edd3c4", "#C8ADC0", "#7765E3", "#3B60E4", "#080708"];
    let randomColor =
        colorsArray[Math.floor(Math.random() * colorsArray.length)];
    return randomColor;
}

function createGrid(x) {
    let sliderValue = slider.value;
    console.log(sliderValue);
    gridContainer.style.gridTemplateRows =
        'repeat(' + sliderValue + "," + 600 / sliderValue + 'px)';
    gridContainer.style.gridTemplateColumns =
    'repeat(' + sliderValue + "," + 600 / sliderValue + "px)";

    for (let i = 0; i < (sliderValue * sliderValue); i++) {
        const gridSquares = document.createElement("div");
        gridSquares.classList.add("gridSquares");
        gridSquares.setAttribute("id","gridSquares");
        gridSquares.style.width = 600 / sliderValue + "px";
        gridSquares.style.height = 600 / sliderValue + "px";
        // gridSquares.textContent = "Test";
        gridContainer.appendChild(gridSquares);
    }
}



function paintGrid() {
    const gridzz = gridContainer.querySelectorAll("div");
    gridzz.forEach((div) => {
        // and for each one we add a 'click' listener
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = colorPicker();
        });
    });
}

// function clearGrid() {
//     var elem = document.getElementById('gridSquares');
//     elem.parentNode.removeChild(elem);
//     return false;
// }
// (window.onload = createGrid()), paintGrid();
