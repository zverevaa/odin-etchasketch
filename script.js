const container = document.querySelector(".draw-container");

// let gridSize = prompt('How many rows in a grid?', 5);

// while (!(gridSize > 0 && gridSize < 101)) {
//     gridSize = prompt('Please try again');
// }

let gridSize = 11;

buildGrid(gridSize);

for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("draw");
    container.appendChild(div);
}

const drawingCells = document.querySelectorAll(".draw");

function buildGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

drawingCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.classList.add("painted");
    });
});
