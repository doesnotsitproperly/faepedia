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
    if (!isMobile) {
        document.getElementById("body").style.width = (window.innerWidth / 5) * 3 + "px";
    }
}

resizeBody();
window.onresize = resizeBody;
