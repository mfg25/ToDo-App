import trash from './trash.png'

export default function loadTodos(allTodosContainer, item, obj){
    let toDoContainer = document.createElement('div')
    toDoContainer.classList.add('ToDo-container')
    let titleTodo = document.createElement('p')
    titleTodo.innerHTML = `${item[obj].titleValue}`
    let dateDeleteCheckedDiv = document.createElement('div')
    dateDeleteCheckedDiv.id = 'date-delete-checked-container'
    let dateText = document.createElement('p')
    dateText.innerHTML = `${item[obj].dateValue}`
    let checkboxFinished = document.createElement('input')
    checkboxFinished.type = 'checkbox'
    let trashCanImg = document.createElement('img')
    trashCanImg.id = 'delete'
    trashCanImg.src = trash
    dateDeleteCheckedDiv.appendChild(dateText)
    dateDeleteCheckedDiv.appendChild(checkboxFinished)
    dateDeleteCheckedDiv.appendChild(trashCanImg)
    toDoContainer.appendChild(titleTodo)
    toDoContainer.appendChild(dateDeleteCheckedDiv)
    allTodosContainer.appendChild(toDoContainer)   
}