function colorPicker() {
    let colorsArray = ['#edd3c4','#C8ADC0','#7765E3','#3B60E4','#080708',]
    let randomColor =
        colorsArray[Math.floor(Math.random() * colorsArray.length)];
    return randomColor;}

function createGrid() {
    const gridContainer = document.querySelector(".gridContainer");
    for (let i = 0; i < 100; i++) {
        const gridSquares = document.createElement("div");
        gridSquares.classList.add("gridSquares");
        gridSquares.style.width = "60px";
        gridSquares.style.height = "60px";
        // gridSquares.textContent = "Test";
        gridContainer.appendChild(gridSquares);
        const gridzz = gridContainer.querySelectorAll('div')
        gridzz.forEach((div) => {
            // and for each one we add a 'click' listener
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = colorPicker();
            });
        });
    }
}

window.onload = createGrid();