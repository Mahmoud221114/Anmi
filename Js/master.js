let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let mahmoud = document.querySelector(".mahmoud");

window.onscroll = function() {
    let value = scrollY;

    stars.style.left = value + "px"
    moon.style.top = value * 4 + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value * 3 + "px"
    mahmoud.style.fontSize = value + "px"
    if (scrollY >= 70) {

        mahmoud.style.fontSize = 70 + "px"
        mahmoud.style.position = "fixed"

        if (scrollY >= 478) {
        mahmoud.style.display = "none"
        } else {
        mahmoud.style.display = "block"
        }
        if (scrollY >= 127) {

            document.querySelector(".main").style.background = "linear-gradient(#3589af, rgb(28 2 32))"

        } else {
            document.querySelector(".main").style.background = "linear-gradient(#01151e, rgb(28 2 32))"
        }

    }
}