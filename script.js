const container = document.querySelector(".draw-container");
const gridSizeButton = document.querySelector(".btn");
const eraser = document.querySelector(".eraser");
const pencil = document.querySelector(".pencil");
const trash = document.querySelector(".erase-all");

let isEraser = false;

let drawingCells = "";

let gridSize = 16;
buildGrid(gridSize);
drawingCells = document.querySelectorAll(".draw");

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
    drawingCells = document.querySelectorAll(".draw");
    reset(drawingCells);
}

dragPaintCells(drawingCells);
pencil.addEventListener("click", () => {
    isEraser = false;
    dragPaintCells(drawingCells);
});
eraser.addEventListener("click", () => {
    isEraser = true;
    erasePaint(drawingCells);
});
trash.addEventListener("click", () => {
    eraseAll(drawingCells);
});
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

function erasePaint(drawingCells) {
    drawingCells.forEach((cell) => {
        cell.addEventListener("mousedown", (e) => {
            isEraser = true;
        });
        cell.addEventListener("mouseup", (e) => {
            cell.classList.remove("painted");
            isEraser = false;
        });
        cell.addEventListener("mousemove", () => {
            if (!isEraser) {
                return;
            } else {
                cell.classList.remove("painted");
            }
        });
    });
}

function eraseAll(drawingCells) {
    drawingCells.forEach((cell) => {
        cell.classList.remove("painted");
    });
}
