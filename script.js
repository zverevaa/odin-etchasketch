const container = document.querySelector(".draw-container");
const gridSizeButton = document.querySelector(".btn");

gridSizeButton.addEventListener("click", getGridSize);

function getGridSize() {
    let gridSize = prompt("How many rows in a grid?", 5);
    if (!(gridSize > 0 && gridSize < 101)) {
        gridSize = prompt("Please try again");
    }
    if (container.firstChild != undefined) {
        removeCells();
    }
    buildGrid(gridSize);
    const drawingCells = document.querySelectorAll(".draw");
    reset(drawingCells);
    dragPaintCells(drawingCells);
}
// let gridSize = 11;

function buildGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("draw");
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    }
}

// buildGrid(gridSize);
// const drawingCells = document.querySelectorAll('.draw');

// function getDrawingCells() {
// return drawingCells;

// }

// function fillCells(drawingCells) {
//     drawingCells.forEach((cell) => {
//         cell.addEventListener('click', () => {
//             cell.classList.add('painted');
//         });
//     })
// }

function reset(drawingCells) {
    drawingCells.forEach((cell) => {
        cell.classList.remove("painted");
    });
}

function removeCells() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

let isPainting = false;

function dragPaintCells(drawingCells) {
    drawingCells.forEach((cell) => {
        cell.addEventListener("mousedown", (e) => {
            isPainting = true;
        });
        cell.addEventListener("mouseup", (e) => {
            cell.classList.add("painted");
            isPainting = false;
        });
        cell.addEventListener("mousemove", () => {
            if (!isPainting) {
                return;
            } else {
                cell.classList.add("painted");
            }
        });
    });
}

// let MDOWN = false;

// ['mousedown', 'mouseup'].forEach(e => {
//     drawingCells.forEach((cell) => {
//         cell.addEventListener(e, () => MDOWN = !MDOWN)
//     });
// });

// function paintCells() {
//     if (MDOWN) {
//         this.classList.add('painted');
//     }
// }

// drawingCells.forEach((cell) => {
//     cell.addEventListener('click', paintCells);
//     console.log('clicked')
// })
