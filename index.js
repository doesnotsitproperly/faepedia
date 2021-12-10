const resizeBody = () => document.getElementById("indexBody").style.width = (window.innerWidth / 3) * 2 + "px";

resizeBody();
window.onresize = resizeBody;