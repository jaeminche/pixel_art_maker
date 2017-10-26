// Select canvas and form elements
const pixelCanvas = document.getElementById("pixel_canvas");
const formElmt = document.getElementById("sizePicker");

function makeGrid() {
    event.preventDefault();
    const height = document.getElementById("input_height").value;
    const width = document.getElementById("input_width").value;
    let grid = "";
    for (let i = 0; i < height; i++) {
        grid += "<tr>";
        for (let s = 0; s < width; s++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
    }
    pixelCanvas.innerHTML = grid;
}

function colorGrid() {
    event.preventDefault();

    $("td").click(function() {
        const colorPicked = document.getElementById("colorPicker").value;
        $(this).css("background", colorPicked);
    });
}

formElmt.addEventListener("submit", makeGrid);
pixelCanvas.addEventListener("mouseover", colorGrid);
