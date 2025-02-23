const decreaseButton = document.getElementById("btn-decrease");
const resetButton = document.getElementById("btn-reset");
const increaseButton = document.getElementById("btn-increase");

const rootButton = document.getElementById("btn-root");
const squareButton = document.getElementById("btn-square");

const counterDisplay = document.getElementById("count");

let count = 0;
count = Number(count);

function Increase()
{
    count++;
    counterDisplay.textContent = count;
}

function Decrease()
{
    count--;
    counterDisplay.textContent = count;
}

function Reset()
{
    count = 0;
    counterDisplay.textContent = count;
}

function Root()
{
    count = Math.sqrt(count);
    counterDisplay.textContent = count;
}

function Square()
{
    count **= 2;
    counterDisplay.textContent = count;
}

decreaseButton.onclick = Decrease;
increaseButton.onclick = Increase;
resetButton.onclick = Reset;

rootButton.onclick = Root;
squareButton.onclick = Square;