const isMobile = navigator.userAgent.includes("Mobi");

const resizeBody = () => {
    const body = document.getElementsByTagName("body")[0];
    const width = window.innerWidth * (isMobile ? 0.9 : 0.6);
    body.style.width = `${width}px`;
}

const platformFormat = (pathToCss) => {
    const stylesheet = document.getElementById("platformStylesheet");
    stylesheet.setAttribute("href", `${pathToCss}/${isMobile ? "mobile" : "default"}.css`);
}

resizeBody();
window.onresize = resizeBody;
