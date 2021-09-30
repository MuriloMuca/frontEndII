const dropdown = document.getElementById('dropdown')
const dateLimite = document.getElementById('input-limit')
const ullimit = document.querySelector('.ul-limit')
const datecreation = document.getElementById('date-creation')
const tasktext = document.getElementById('task-text')
const form = document.querySelector('form')
const mytodo = document.querySelector(".todo-body")
const inputCheck = document.querySelector('.form-check-input')
let id = 2

datecreation.valueAsDate = new Date
const date = datecreation.value
dateLimite.setAttribute("min", date)

function a() {
    const a = document.createElement('a')
    return a;
}

function div() {
    const div = document.createElement('div')
    return div;
}
function divRow() {
    const div = document.createElement('div')
    div.setAttribute("class", "row")
    return div;
}
function divCol() {
    const div = document.createElement('div')
    div.setAttribute("class", "col")
    return div;
}
function input() {
    const input = document.createElement('input')
    input.setAttribute('class', 'form-check-input')
    return input;
}

function createTask() {

    const taskrow = divRow()
    taskrow.classList.add("todo-list")
    taskrow.setAttribute("id", `${id}`)
    const taskchek = divCol()
    taskchek.classList.replace("col","col-auto")

    const taskcheckinput = input()
    taskcheckinput.setAttribute("type", "checkbox")
    taskcheckinput.setAttribute("onclick", `animatedList(${id})`)

    const taskdescription = divCol()
    taskdescription.classList.add('text-break')

    taskdescription.innerHTML = tasktext.value

    const taskDateLimit = divCol()
    taskDateLimit.innerHTML += `<i class="fas fa-hourglass-half"></i> `
    taskDateLimit.innerHTML += dateformat(dateLimite.value) 

    const taskDateCreation = divCol()
    taskDateCreation.classList.replace("col","col-auto")
    taskDateCreation.innerHTML += `<i class="fas fa-info-circle"></i> `
    taskDateCreation.innerHTML += dateformat(datecreation.value) 

    const taskDelete = divCol()
    taskDelete.classList.replace("col","col-auto")

    const taskAncora = a()
    taskAncora.setAttribute('href', '#')
    taskAncora.setAttribute('onclick', `removeList(${id})`)
    taskAncora.innerHTML += `<i class="fas fa-trash-alt"></i>`

    taskrow.appendChild(taskchek)
    taskchek.appendChild(taskcheckinput)
    taskDelete.appendChild(taskAncora)
    taskrow.appendChild(taskdescription)
    taskrow.appendChild(taskDateLimit)
    taskrow.appendChild(taskDateCreation)
    taskrow.appendChild(taskDelete)

    mytodo.appendChild(taskrow)
    id++

}

form.onsubmit = (event) => {
    event.preventDefault();
    createTask()
}

function dateformat(parm) {
    const date = parm.split("-")
    switch (date[1]) {
        case "01":
            return `${date[2]} Jan`
        case "02":
           return `${date[2]} Fev`
        case "03":
           return `${date[2]} Març`
        case "04":
           return `${date[2]} Abril`
        case "05":
          return  `${date[2]} Maio`
        case "06":
          return  `${date[2]} Jun`
        case "07":
          return  `${date[2]} Jul`
        case "08":
          return `${date[2]} Agost`
        case "09":
            return `${date[2]} Set`
        case "10":
           return `${date[2]} Out`
        case "11":
           return `${date[2]} Nov`
        case "12":
            return `${date[2]} Dez`
        default:
            break;
    }
}

form.onchange = () => {
    ullimit.classList.remove('is-invalid')
    dropdown.classList.remove('is-invalid')
    tasktext.classList.remove('is-invalid')
    if(!tasktext.checkValidity()) {
        tasktext.classList.add('is-invalid')
    }
    if(!dateLimite.checkValidity()){
        dropdown.classList.add('is-invalid')
        ullimit.classList.add('is-invalid')
    }
}

function removeList(params) {
    let element = document.getElementById(params)
    element.remove()
}

function animatedList(params) {
    let element = document.getElementById(params)
    let input = element.querySelector('.form-check-input')
    element.classList.remove('animationList')
    if(input.checked){
        element.classList.add('animationList')
    }
}