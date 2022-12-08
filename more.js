// Wave Form
let labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms;">${letter}</span>`)
        .join("");
});

// Progress Steps
let progress = document.querySelector(".progress");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let circles = document.querySelectorAll(".circle-progress");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add("active-progress");
        } else {
            circle.classList.remove("active-progress");
        }
    });

    let actives = document.querySelectorAll(".active-progress");

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

// Accordion
let btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active");
    });
});

// animated navigation
let toggle = document.getElementById("toggle");
let nav = document.getElementById("anim-nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active-nav");
});

// checkbox sliders
let toggleSliders = document.querySelectorAll(".toggle-slider");
let good = document.querySelector("#good");
let cheap = document.querySelector("#cheap");
let fast = document.querySelector("#fast");

toggleSliders.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
        doTheTrick(e.target);
    });
});

function doTheTrick(theCLickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theCLickedOne) {
            fast.checked = false;
        }

        if (cheap === theCLickedOne) {
            good.checked = false;
        }

        if (fast === theCLickedOne) {
            cheap.checked = false;
        }
    }
}

// DragNdrop
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
});

function dragStart() {
    this.className += " hold";
    setTimeout(() => {
        this.className = "invisible";
    }, 0);
}

function dragEnd() {
    this.className = "fill";
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    this.append(fill);
}

// Notifications
const buttonError = document.getElementById("button-error");
const buttonDanger = document.getElementById("button-danger");
const buttonSuccess = document.getElementById("button-success");
const toasts = document.getElementById("toasts");

const messages = {
    success: "Success message",
    error: "Error message",
    danger: "Danger message",
};

buttonError.addEventListener("click", () => createNotification("error"));
buttonDanger.addEventListener("click", () => createNotification("danger"));
buttonSuccess.addEventListener("click", () => createNotification("success"));

function createNotification(status) {
    const notif = document.createElement("div");
    notif.classList.add("toast", `toast-${status}`);

    notif.innerText = messages[status];

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// range slider
const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue("width");
    const label_width = getComputedStyle(label).getPropertyValue("width");

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// color scheme
const schemeRed = document.querySelector(".scheme-circle-red");
const schemeOrange = document.querySelector(".scheme-circle-orange");
const schemeGreen = document.querySelector(".scheme-circle-green");
const schemePurple = document.querySelector(".scheme-circle-purple");
const schemeBlue = document.querySelector(".scheme-circle-blue");

const root = document.querySelector(":root");

schemeRed.addEventListener("click", () => {
    root.style.setProperty("--line-border-fill", "rgb(201, 0, 77)");
});

schemeOrange.addEventListener("click", () => {
    root.style.setProperty("--line-border-fill", "rgb(235, 174, 61)");
});

schemeGreen.addEventListener("click", () => {
    root.style.setProperty("--line-border-fill", "rgb(45, 167, 45)");
});

schemePurple.addEventListener("click", () => {
    root.style.setProperty("--line-border-fill", "rgb(134, 0, 146)");
});

schemeBlue.addEventListener("click", () => {
    root.style.setProperty("--line-border-fill", "rgb(0, 183, 255)");
});

// animation for 3d scale
document.querySelectorAll(".blast").forEach((el) => {
    el.addEventListener("mouseenter", function () {
        el.classList.add("rubberBand", "animated", "i-red");
        setTimeout(() => {
            el.classList.remove("rubberBand", "animated", "i-red");
        }, 1000);
    });
});