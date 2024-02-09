const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    createGlitter(300);
});

//Efecto celebración
const getRandomValue = (max, min = 1) => {
    return Math.floor(Math.random() * max) + min;
};

const createGlitter = (density) => {
    for (let i = 0; i < density; i++) {
        const glitterUni = document.createElement("span");
        const horizontalPosition = `${getRandomValue(100)}%`;
        const fallDelay = `${getRandomValue(5)}s`;
        const fallDuration = `${getRandomValue(10, 5)}s`;
        const flakeSize = `${getRandomValue(8, 1)}px`;
        const flakeOpacity = Math.random().toFixed(2);

        glitterUni.classList.add("glitter");
        glitterUni.style.opacity = flakeOpacity;
        glitterUni.style.width = flakeSize;
        glitterUni.style.height = flakeSize;
        glitterUni.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
        glitterUni.style.right = horizontalPosition;

        container.appendChild(glitterUni);
    }
};
