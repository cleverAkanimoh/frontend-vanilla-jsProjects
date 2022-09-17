const colors = ["green", "red", "rgba(133, 122, 200", "#f15025", "rgba(255, 200, 199)"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.onclick = () => {
    let randomNumber = getRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
}

const getRandomNumbers = () => {
    return Math.floor(Math.random() * colors.length);
}