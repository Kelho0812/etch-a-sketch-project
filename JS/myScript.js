function createGrid() {
    const gridContainer = document.querySelector(".gridContainer");

    for (let i = 0; i < 256; i++) {
        const gridSquares = document.createElement("div");
        gridSquares.classList.add("gridSquares");
        gridSquares.style.width = "60px";
        gridSquares.style.height = "60px";
        gridSquares.textContent = "Test";
        gridContainer.appendChild(gridSquares);
    }
}



window.onload = createGrid();
