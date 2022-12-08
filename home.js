const navHome = document.querySelector(".nav")
window.addEventListener('scroll', fixNav)

function fixNav () {
    if (window.scrollY > navHome.offsetHeight + 150) {
        navHome.classList.add('active')
    } else {
        navHome.classList.remove('active')
    }
}

// автотекст
let textEl = document.getElementById("auto-text")
let textTyping = "Привет, меня зовут Максим!"

let i = 1
let reversed = true
let speed = 200

writeText()

function writeText () {
    textEl.innerHTML = textTyping.slice(0, i)

    if (reversed) {
        i++
    } else {
        i--
    }
    

    if (i > textTyping.length || i === 1) {
        reversed = !reversed
    }

    setTimeout(writeText, speed)
}