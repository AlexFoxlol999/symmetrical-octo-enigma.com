const capybara = document.getElementById("capybara");
const mandarin = document.getElementById("mandarin");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (capybara.classList != "jump") {
        capybara.classList.add("jump")
    }
    setTimeout( function(){
        capybara.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let capybaraTop = parseInt(window.getComputedStyle(capybara).getPropertyValue("top"))
    let mandarinLeft = parseInt(window.getComputedStyle(mandarin).getPropertyValue("left"))

    if (mandarinLeft < 50 && mandarinLeft > 0 && capybaraTop >=140) {
    alert("GAME OVER!")
    }
})