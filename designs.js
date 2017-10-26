// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// 1. Define your variables by selecting the DOM elements that
// the user will interact with. This is where your jQuery skills
// can come into play! For instance, the submit button, the table,
// and the color picker need to be accessed. The value of the color
// selected needs to be stored as well, since the clicked cell
// in the table needs to be set to the selected color.

// 2. Add event listeners to the relevant DOM elements, so that
// user input can be color values and table sizes can be dynamically
// set by the user.

// 3. Set the size of the cross stitch canvas as an N by M grid with
// the makeGrid() function. Use your knowledge of JavaScript loops
// to dynamically clear and create the table based on user input.
// Each cell should hav""e an event listener that sets
// the background color of the cell to the selected color.

let pixelCanvas = document.getElementById("pixel_canvas");
let formElmt = document.getElementById("sizePicker");
// let formElmt = $("#sizePicker");

// function updateInput() {
//  let inputHeight = document.getElementById("input_height").value;
//  let inputWidth = document.getElementById("input_width").value;
//  makeGrid(inputHeight, inputWidth);
//  // return false;
// }

// function changeColor() {
//  document.getElementsByTagName("td").style.background = "#aaa";
// }

function makeGrid() {
    event.preventDefault();
    let height = document.getElementById("input_height").value;
    let width = document.getElementById("input_width").value;
    let grid = "";
    for (let i = 0; i < height; i++) {
        grid += "<tr>";
        for (let s = 0; s < width; s++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
    }
    pixelCanvas.innerHTML = grid;
    // return false;
}

function colorGrid() {
    event.preventDefault();

    $("td").click(function() {
        let colorPicked = document.getElementById("colorPicker").value;
        $(this).css("background", colorPicked);
    });
}

formElmt.addEventListener("submit", makeGrid);
pixelCanvas.addEventListener("click", colorGrid);
// formElmt.on("submit", makeGrid);

// var tdElmt = document.querySelector("td");



// tdElmt.addEventListener("click", changeColor);

// $( function() {
//  $("td").click(function() {
//      $(this).css("background", "#aaa");
//  });
// })

// makeGrid(inputHeight, inputWidth);






// jQuery

// function makeGrid(inputHeight, inputWidth, submit, table) {
//  const tr = "<tr></tr>";
//  const td = "<td></td>";
//  table.text(function mkgrid(height, width, submit, table) {
//      for (const i = 0; i < inputHeight; i++) {
//          table.html(tr);
//      }
//      for (const i = 0; i < inputWidth; i++) {
//          tr.html(td);
//      }
//  })
// }

// const inputHeight = $("#input_height");
// const inputWidth = $("#input_width");
// const submit = $(":submit");
// const table = $("#pixel_canvas");
// const colorPicker = $("#colorPicker");

// let row = "<tr></tr>";
// let col = "<td></td>";
// let rowcol = "<tr><td></td><td></td></tr>";

// submit.click(function(event){
//  // event.preventDefault();
//  // table.html("<tr><td></td><td></td></tr>");
//  // table.html(rowcol);
//  table.html(row);
//  $("tr").append(col);
//  // makeGrid();
//  return false;
// })

// $( function() {
//  $("td").click(function() {
//      $(this).css("background", "#aaa");
//  });
// })