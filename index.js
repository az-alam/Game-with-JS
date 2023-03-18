const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");
const start = document.querySelector("#screen1 a");

const images = document.querySelectorAll("#screen2 img");
let selectedimage = '';

const timerspan = document.querySelector(".timer span");
const scorespan = document.querySelector(".score span");

start.onclick = (e) => {
    e.preventDefault()
    screen1.style.display = "none"
    screen2.style.display = "flex"
}

for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        selectedimage = images[i].src;
        screen2.style.display = "none"
        screen3.style.display = "flex"

        letsplay();
    }
}

function letsplay() {
    let timer = 0;
    let x = setInterval(() => {
        if (timer === 30) {
            alert("Your Score is" +" " + scorespan.innerHTML);
            clearInterval(x)
        }
        else {
            timerspan.innerHTML = ++timer;

            popphoto();
        }

    }, 1000)
}

function popphoto() {
    const img = document.createElement("img");
    img.setAttribute("src", selectedimage);

    img.style.left = getrandomleft();
    img.style.top = getrandomtop();

    img.setAttribute("onclick", "removeimages(this)");
    document.querySelector("#screen3 .images").append(img);
}

function getrandomleft() {
    return Math.random() * window.innerWidth - 50 + "px";
}
function getrandomtop() {
    return Math.random() * window.innerHeight - 50 + "px";
}

let score = 0;
function removeimages(element) {
    element.remove();
    scorespan.innerHTML=++score;
}