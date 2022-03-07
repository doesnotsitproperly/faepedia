const isMobile = navigator.userAgent.includes("Mobi");

const platformFormat = (pathToCss) => {
    let stylesheet = document.getElementById("platformStylesheet");
    if (isMobile) {
        stylesheet.setAttribute("href", pathToCss + "/mobile.css");
    } else {
        stylesheet.setAttribute("href", pathToCss + "/default.css");
    }
}

const resizeBody = () => {
    if (isMobile) {
        document.getElementsByTagName("body")[0].style.width = window.innerWidth * 0.9 + "px";
    } else {
        document.getElementsByTagName("body")[0].style.width = window.innerWidth * 0.6 + "px";
    }
}

resizeBody();

window.onresize = resizeBody;
