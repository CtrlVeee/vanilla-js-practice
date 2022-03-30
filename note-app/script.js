const btn = document.querySelector('#input')
const txt = document.querySelector('textarea')
const temp = document.querySelector("template")
const notes = document.querySelector('.note-list')

btn.addEventListener('click', () => {
    let div= document.createElement('div')
    div.setAttribute("class", "note-item")

    div.appendChild(temp.content.cloneNode(true))
    
    notes.appendChild(div)
    console.log(notes)
    
})