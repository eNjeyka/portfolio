const skillLearnedJS = document.getElementById("skill-learned-js");
const skillEmptyJS = document.getElementById("skill-empty-js");
const skillLearnedHTML = document.getElementById("skill-learned-html");
const skillEmptyHTML = document.getElementById("skill-empty-html");
const skillLearnedCSS = document.getElementById("skill-learned-css");
const skillEmptyCSS = document.getElementById("skill-empty-css");
const skillLearnedPY = document.getElementById("skill-learned-python");
const skillEmptyPY = document.getElementById("skill-empty-python");
const skillLearnedVUE = document.getElementById("skill-learned-vue");
const skillEmptyVUE = document.getElementById("skill-empty-vue");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const MAX_SKILL = 36;
const SKILLS = {
    javascript: 8,
    css: 6,
    html: 6,
    python: 4,
    vue: 4,
};

function fillSKillsContainer() {
    // Javascript
    // for (let i = 0; i < SKILLS.javascript.learned; i++) {
    //     createSquare(skillLearnedJS);
    // }
    // for (let i = 0; i < SKILLS.javascript.empty; i++) {
    //     createSquare(skillEmptyJS);
    // }

    let skillLearned = null;
    let skillEmpty = null;

    for (let skill in SKILLS) {
        switch (skill) {
            case "javascript":
                skillLearned = skillLearnedJS;
                skillEmpty = skillEmptyJS;
                break;
            case "html":
                skillLearned = skillLearnedHTML;
                skillEmpty = skillEmptyHTML;
                break;
            case "css":
                skillLearned = skillLearnedCSS;
                skillEmpty = skillEmptyCSS;
                break;

            case "python":
                skillLearned = skillLearnedPY;
                skillEmpty = skillEmptyPY;
                break;

            case "vue":
                skillLearned = skillLearnedVUE;
                skillEmpty = skillEmptyVUE;
                break;
        }

        skillLearned.style.maxWidth = `${SKILLS[skill] * 10}px`;
        skillEmpty.style.maxWidth = `${(MAX_SKILL - SKILLS[skill]) * 10}px`;

        // success
        for (let i = 0; i < SKILLS[skill]; i++) {
            createSquare(skillLearned, "square-success");
        }

        // default
        for (let i = 0; i < MAX_SKILL - SKILLS[skill]; i++) {
            createSquare(skillEmpty, "square-default");
        }
    }
}

fillSKillsContainer();

function createSquare(parentElement, classSquareStatus) {
    const square = document.createElement("div");
    square.classList.add("square", `${classSquareStatus}`);

    square.addEventListener("mouseover", () => setColor(square));

    if (classSquareStatus === "square-success") {
        square.addEventListener("mouseout", () => removeColorSuccess(square));
    } else {
        square.addEventListener("mouseout", () => removeColorDefault(square));
    }

    parentElement.appendChild(square);
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.background = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorSuccess(elem) {
    elem.style.background = `#32d296`;
    elem.style.boxShadow = `0 0 2px #61ffc5`;
}

function removeColorDefault(elem) {
    elem.style.background = `#1d1d1d`;
    elem.style.boxShadow = `0 0 2px #777`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

