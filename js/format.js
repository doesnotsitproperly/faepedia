const isMobile = navigator.userAgent.includes("Mobi");

const ifMobile = (nested) => {
    if (isMobile) {
        if (nested) {
            document.getElementById("stylesheet").setAttribute("href", "../css/mobile.css");
        } else {
            document.getElementById("stylesheet").setAttribute("href", "css/mobile.css");
        }
    }
}

const resizeBody = () => {
    if (isMobile) {
        document.getElementById("body").style.width = window.innerWidth * 0.9 + "px";
    } else {
        document.getElementById("body").style.width = window.innerWidth * 0.6 + "px";
    }
}

resizeBody();
window.onresize = resizeBody;
