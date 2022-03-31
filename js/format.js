const isMobile = navigator.userAgent.includes("Mobi");

const resizeBody = () => {
    const body = document.getElementsByTagName("body")[0];

    if (isMobile) {
        body.style.width = `${window.innerWidth * 0.9}px`;
    }
    else {
        body.style.width = `${window.innerWidth * 0.6}px`;
    }
}

const platformFormat = (pathToCss) => {
    const stylesheet = document.getElementById("platformStylesheet");

    if (isMobile) {
        stylesheet.setAttribute("href", `${pathToCss}/mobile.css`);
    }
    else {
        stylesheet.setAttribute("href", `${pathToCss}/default.css`);
    }
}

resizeBody();
window.onresize = resizeBody;
