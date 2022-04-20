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
var res = document.getElementById("restart")

let currentItem = 0

start.addEventListener('click', () => {
    startApp()
    currentItem = 0
})

next.addEventListener('click', e => {
    if (currentItem >= data.length - 1) {
        head.textContent = "Quiz is over!"
        ops.classList.add('hide')
        res.classList.remove('hide')
        currentItem = 0
    } else {
        currentItem ++
        clearSelect()
        loadItem(currentItem)
    }
    
    e.target.classList.add("hide")
})

enter.addEventListener('click', e => {
    children.forEach(child => {
        let i = children.indexOf(child)
        if (data[currentItem]["options"][i][1]) {
            child.classList.add('correct')
        } else {
            child.classList.add('wrong')
        }
    })
    e.target.classList.add('hide')
    if (next.classList.contains('hide')) {
        next.classList.remove('hide')
    } 
})

res.addEventListener("click", e => {
    head.textContent = "Quiz App"
    head.classList.remove("hide")
    start.classList.remove("hide")
    e.target.classList.add('hide')
})

function startApp() {
    ops.classList.remove('hide')
    start.classList.add('hide')

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

function selectChild() {
    children.forEach(child => {
    child.addEventListener('click', e => {
        clearSelect()
        e.target.classList.add('selected')
        if (enter.classList.contains('hide')) {
            enter.classList.remove('hide')
        }
    }
)})}

function clearSelect() {
    children.forEach(elem => {
        elem.classList.remove('selected')
        elem.classList.remove('wrong')
        elem.classList.remove('correct')
    })
}

selectChild()

