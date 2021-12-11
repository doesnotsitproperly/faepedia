const resizeBody = () => {
    document.getElementById("body").style.width = (window.innerWidth / 5) * 3 + "px";
}

resizeBody();
window.onresize = resizeBody;
