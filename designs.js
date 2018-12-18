const form = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');

//creates a grid that the user can interact with :)
function makeGrid() {
    //Storing grid Height and Width value
    const h = document.getElementById('inputHeight').value;
    const w = document.getElementById('inputWidth').value;

    //create the table based on user input.
    for (let row = 0; row < h; row++) {
        let tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let col = 0; col < w; col++) {
            let td = document.createElement('td');
            canvas.lastChild.appendChild(td);
        }
    }

    // Each cell have an event listener that sets the background color
    let cells = document.querySelectorAll('td');
    cells.forEach(function(cell) {
        cell.addEventListener('click', function() {
            this.style.backgroundColor = document.querySelector('#colorPicker').value;
        });
    });
}

//add event listener When size is submitted and call makeGrid()
form.addEventListener('submit', function(e) {
    //Clear the canvas when user re-submit
    canvas.innerHTML = '';
    e.preventDefault();
    makeGrid();
});