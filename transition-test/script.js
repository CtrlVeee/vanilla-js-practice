const bod = document.getElementsByTagName("body")[0];
const btn = document.getElementsByTagName("button")[0];
const H = document.getElementsByTagName("h2")[0];
const txt = document.getElementsByTagName('p')[0];
const div = document.getElementsByTagName('div')[0];

let state=false;
function sweesh() {
    state = !state;
    if (state) {
        bod.classList.remove("blue")
        bod.classList.add("red")
        H.style.visibility = 'hidden'
        div.style.width = "40vw"
    } else {
        bod.classList.remove("red")
        bod.classList.add("blue")
        H.style.visibility = 'visible'
        div.style.width = "20vw"
    }
}
console.log(bod.classList)