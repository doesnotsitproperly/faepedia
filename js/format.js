const isMobile = navigator.userAgent.includes("Mobi");

const platformFormat = (pathToCss) => {
    const stylesheet = document.getElementById("platformStylesheet");
    if (isMobile) {
        stylesheet.setAttribute("href", pathToCss + "/mobile.css");
    } else {
        stylesheet.setAttribute("href", pathToCss + "/default.css");
    }
}

const resizeBody = () => {
    const body = document.getElementsByTagName("body")[0];
    if (isMobile) {
        body.style.width = window.innerWidth * 0.9 + "px";
    } else {
        body.style.width = window.innerWidth * 0.6 + "px";
    }
}

const resizeEmoji = (size) => {
    const emoji = document.getElementsByClassName("emoji");
    if (isMobile) {
        for (let i in emoji) {
            if (size == "h1") {
                emoji[i].height = 64;
            } else {
                emoji[i].height = 32;
            }
        }
    } else {
        for (let i in emoji) {
            if (size == "h1") {
                emoji[i].height = 32;
            } else if (size == "table") {
                emoji[i].height = 14;
            } else {
                emoji[i].height = 16;
            }
        }
    }
}

resizeBody();
window.onresize = resizeBody;
