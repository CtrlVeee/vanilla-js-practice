const data = [
    {
        header: "Question 1",
        options: [
            ['option 1', true],
            ['option 2', false],
            ['option 3', false],
            ['option 4', false]
        ]
    },
    {
        header: "Question 2",
        options: [
            ['option 5', false],
            ['option 6', false],
            ['option 7', true],
            ['option 8', false]
        ]
    },
    {
        header: "Question 3",
        options: [
            ['option 9', false],
            ['option 10', true],
            ['option 11', false],
            ['option 12', false]
        ]
    }
]

var ops = document.getElementsByTagName('ul')[0]
var enter = document.getElementById('enter')
var start = document.getElementById('start')
var next = document.getElementById('next')
var head = document.getElementById('desc')

start.addEventListener('click', () => {
    startApp()
})

let currentItem = 0
next.addEventListener('click', () => {
    currentItem ++
    loadItem(currentItem)
})

function startApp() {
    ops.classList.remove('hide')
    start.classList.add('hide')
    start.textContent = "Restart";

    loadItem(currentItem)
}

function loadItem(currentItem) {
    children.forEach(child => {
        let i = children.indexOf(child)
        head.textContent = data[currentItem]['header']
        child.textContent = data[currentItem]['options'][i][0]
    })
}

children = [...ops.children]
children.forEach(child => {
    child.addEventListener('click', e => {
        children.forEach(elem => {
            elem.classList.remove('selected')
        })
        e.target.classList.add('selected')
        if (next.classList.contains('hide')) {
            next.classList.remove('hide')
        }
    }
)})

