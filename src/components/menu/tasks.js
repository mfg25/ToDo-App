function createTasks(text){
    let div = document.createElement('div')
    div.classList.add("tasks");

    let divText = document.createElement('p')
    divText.innerText = `${text}`

    div.appendChild(divText)

    return div
}

export default createTasks