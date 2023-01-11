
let array = []
function addtask() {
    const task = document.getElementById("task").value
    if (task === '') { 
        return
    }
    array.push(task)

    array.map((valor, index) => {
        const dad = document.getElementById("tasks")
        const lastItem = document.getElementById(`task${index}`)

        
        const div = document.createElement(`div`)
        const checkbutton = document.createElement(`button`)
        const deletebutton = document.createElement(`button`)
        const element = document.createElement("h1")
        
        div.setAttribute("id", `task${index}`)
        div.setAttribute("class", "flex-container")
        checkbutton.setAttribute("id", `checkbox${index}`)
        checkbutton.setAttribute("class", "checkbox")
        checkbutton.setAttribute("onclick", `done(${index})`)
        checkbutton.innerHTML = `<span class="material-symbols-outlined">done</span>`
        deletebutton.setAttribute("type", "button")
        deletebutton.setAttribute("id", `removetask${index}`)
        deletebutton.setAttribute("onclick", `deleteTask(${index})`)
        deletebutton.setAttribute("class", "deleteButton")
        deletebutton.innerHTML = `<span class="material-symbols-outlined">delete</span>`
        element.setAttribute("id", `element${index}`)
        element.setAttribute("class", "element")
        

        element.innerHTML = task
        div.appendChild(checkbutton)
        div.appendChild(deletebutton)
        div.appendChild(element)
        dad.appendChild(div)

        if (lastItem) {
            dad.replaceChild(lastItem, div)
        }
    })
}


function done(index) {
    const task = document.getElementById(`element${index}`)
    const checkbutton = document.getElementById(`checkbox${index}`)
    checkbutton.setAttribute("onclick", `undone(${index})`)
    checkbutton.setAttribute("class", "uncheckbutton")
    checkbutton.innerHTML = `<span class="material-symbols-outlined">close</span>`
    task.setAttribute("class", "done")
}

function undone(index) {
    const task = document.getElementById(`element${index}`)
    const checkbutton = document.getElementById(`checkbox${index}`)
    checkbutton.setAttribute("onclick", `done(${index})`)
    checkbutton.setAttribute("class", "checkbox")
    checkbutton.innerHTML = `<span class="material-symbols-outlined">done</span>`
    task.setAttribute("class", "undone")
}

function inputClean() {
    const input = document.getElementById("task")
    input.value = ""
}

function removeAllTasks() {
    var dad = document.querySelector('#tasks')
    var child = dad.lastElementChild
    while (child) 
    {
        array.pop()
        dad.removeChild(child)
        child = dad.lastElementChild
    }
}

function deleteTask(index) {
    var div = document.querySelector(`#tasks`)
    var dad = document.querySelector(`#task${index}`)
    var child = dad.lastElementChild
    while (child)
    {
        dad.removeChild(child)
        child = dad.lastElementChild
    }
    array.splice(index)
    div.removeChild(dad)
}