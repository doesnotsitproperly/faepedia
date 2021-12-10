const resizeBody = () => {
    document.getElementById("body").style.width = (window.innerWidth / 3) * 2 + "px";
}

resizeBody();
window.onresize = resizeBody;
