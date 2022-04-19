const data = [
    {
        header: "Question 1",
        options: [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ]
    },
    {
        header: "Question 2",
        options: [
            "option 5",
            "option 6",
            "option 7",
            "option 8"
        ]
    },
    {
        header: "Question 3",
        options: [
            "option 9",
            "option 10",
            "option 11",
            "option 12"
        ]
    }
]

var ops = document.getElementsByTagName('ul')[0]
var enter = document.getElementById('enter')
var start = document.getElementById('start')
var next = document.getElementById('next')

start.addEventListener('click', () => {
    startApp()
})

next.addEventListener('click', () => {
    nextItem()
})

function startApp() {
    ops.classList.remove('hide')
    start.classList.add('hide')
    start.textContent = "Restart";
}

function nextItem() {
    console.log(children)
}

children = [...ops.children]
children.forEach(child => {
    child.addEventListener('click', e => {
        children.forEach(elem => {
            elem.classList.remove('selected')
        })
        e.target.classList.add('selected')
        if (enter.classList.contains('hide')) {
            enter.classList.remove('hide')
        }
    }
)})

