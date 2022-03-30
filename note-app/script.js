const btn = document.querySelector('#input')
const txt = document.querySelector('textarea')

btn.addEventListener('click', () => {
    console.log(txt.value)
})