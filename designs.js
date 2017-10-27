// Select canvas and form elements
const pixelCanvas = document.getElementById('pixel_canvas');
const formElmt = document.getElementById('sizePicker');

/** @description Makes grid taking user's inputs as height and width */
function makeGrid(event) {
    event.preventDefault();
    const height = document.getElementById('input_height').value;
    const width = document.getElementById('input_width').value;
    // Clears the previous table
    pixelCanvas.innerHTML = '';
    /** @description Makes grid  */
    for (let i = 0; i < height; i++) {
    	// Inserts rows into the table
    	const row = pixelCanvas.insertRow(i);
    	for (let j = 0; j < width; j++) {
    		// Inserts cells into each of the rows
    		const cell = row.insertCell(j);
    		/** @description Picks color  */
    		cell.addEventListener('click', function() {
    			this.style.backgroundColor = document.getElementById('colorPicker').value;
    		})
    	}
    }
}

// call the function 'makeGrid', if user clicks the submit button
formElmt.addEventListener('submit', makeGrid);
