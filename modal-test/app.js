const mod = document.getElementsByClassName("box")[0];
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];

btn.onclick = () => {
    mod.style.display ="block"
}
close.onclick = () => {
    mod.style.display = "none"
}        
window.onclick = e => {
    //console.log(e.target)
    if (e.target == mod) {
    mod.style.display = "none"
    }
}