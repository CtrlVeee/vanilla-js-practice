const tracklist = [
    {
        name: 'Jujutsu Kaisen Op 1',
        src: "audio\\廻廻奇譚 - Eve MV.mp3"
    }, 
    {
        name: 'Mantis Lords',
        src: "audio\\Hollow Knight OST - Mantis Lords.mp3"
    }, 
    {
        name: 'Fallen Donw (Cover)',
        src: "audio\\VGR, CG5 - Fallen Down (Undertale Music Video).mp3"
    }, 
    {
        name: 'Maybe Daniels all the push',
        src: "audio\\Maybe Daniel's All the Push I Need.mp3"
    }
]

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const title = document.querySelector('h3')
const audio = document.querySelector('audio')

let index = 0

window.addEventListener("load", ()=>{
    console.log("loaded")
    loadMusic(index, title, audio)
    
})

prev.addEventListener("click", ()=> {
    index--;
    if (index < 0) {
        index = tracklist.length -1
    }
    loadMusic(index, title, audio)
})

next.addEventListener("click", ()=> {
    index++;
    if (index >= tracklist.length) {
        index = 0
    }
    loadMusic(index, title, audio)
})

function loadMusic(index, elem, audio) {
    elem.textContent = tracklist[index]["name"]
    audio.setAttribute('src', tracklist[index]["src"])
    console.log(audio.getAttribute('src'))

}