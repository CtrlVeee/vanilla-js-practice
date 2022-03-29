const btn = document.querySelector('#add-btn')
const input = document.querySelector('#input')
const temp = document.querySelector('template')
const todo = document.querySelector('#todo-container')

/*
btn.addEventListener('click', function() {
    let task_str = input.value;

    let entry = temp.content.cloneNode(true);
    const kids = entry.childNodes;
    console.log(kids)
    kids[3].addEventListener('click', function() {
        console.log(kids[3].parentNode)
    })
    if (task_str != '') {
        kids[1].textContent = task_str;
    }
    todo.appendChild(entry)
    
})
*/

btn.addEventListener('click', function() {
    let task_str = input.value;

    create_entry(task_str);
})

function create_entry(task_name) {
    const entry = document.createElement('div')
    const name = document.createElement('p')
    const text = document.createTextNode(task_name)
    name.appendChild(text)
    const del_btn = document.createElement('button')
    const del = document.createTextNode("delete")
    del_btn.appendChild(del)

    del_btn.addEventListener('click', function(){
        del_btn.parentNode.remove()
    })

    entry.appendChild(name)
    entry.appendChild(del_btn)

    todo.appendChild(entry)
}