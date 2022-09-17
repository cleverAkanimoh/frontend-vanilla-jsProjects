const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.onclick = () => {
    let hexColor = '#';
    for (let i=0; i<6; i++ ) {
        hexColor += hex[getRandomNumbers()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
}

const getRandomNumbers = () => {
    return Math.floor(Math.random() * hex.length);
}