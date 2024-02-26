let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let div = document.querySelector("div");

function randomColor (){
    div.style.backgroundColor = generateRandomColor();
    heading.innerText = `${generateRandomColor()}`;
}

function generateRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.onclick = randomColor;