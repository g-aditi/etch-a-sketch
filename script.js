const container = document.getElementById("container");
const color = document.getElementById("colorOption");

const clear = document.getElementById('clear-button');
clear.addEventListener('click', function()
{
  container.innerHTML = '';
  color.value = 'rgba(0,0,0,0)';
});

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", sketch);
  }            
}

function sketch(e)
{
  e.target.style.backgroundColor = color.value;
}

function disableButtons()
{
  document.getElementById("size-opt-1").disabled = true;
  document.getElementById("size-opt-2").disabled = true;
  document.getElementById("size-opt-3").disabled = true;
}

const size1 = document.getElementById("size-opt-1");
size1.addEventListener('click', function()
{
  makeRows(9, 9);
  disableButtons();
});

const size2 = document.getElementById("size-opt-2");
size2.addEventListener('click', function()
{
  makeRows(12, 12);
  disableButtons();
});

const size3 = document.getElementById("size-opt-3");
size3.addEventListener('click', function()
{
  makeRows(16, 16);
  disableButtons();
});




