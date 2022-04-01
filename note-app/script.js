const btn = document.querySelector('#input')
const txt = document.querySelector('textarea')
const temp = document.querySelector("template")
const notes = document.querySelector('.note-list')

btn.addEventListener('click', () => {
    if (txt.value != '') {
        let div= document.createElement('div')
        div.setAttribute("class", "note-item")
        div.appendChild(temp.content.cloneNode(true))
        div.children[1].textContent = txt.value
        div.children[0].addEventListener('click', function() {
            div.remove()
        })

        notes.appendChild(div)
    }
    
})
