
import trash from './trash.png'
import {removeTask, toggleCompleted} from '../menu/savedTasks.js'
export default function loadTodos(allTodosContainer, item, obj){
    let toDoContainer = document.createElement('div')
    toDoContainer.classList.add('ToDo-container')
    let titleTodo = document.createElement('p')
    titleTodo.innerHTML = `${item[obj].titleValue}`
    let dateDeleteCheckedDiv = document.createElement('div')
    dateDeleteCheckedDiv.id = 'date-delete-checked-container'
    let dateText = document.createElement('p')
    dateText.innerHTML = `${item[obj].dateValue}`
    let taskDateTime = new Date(item[obj].dateValue).getTime();
    console.log(new Date(item[obj].dateValue))
    if(taskDateTime < Date.now()){
        dateText.classList.add('late')
    }
    let checkboxFinished = document.createElement('input')
    checkboxFinished.type = 'checkbox'
    checkboxFinished.id = 'checkbox'
    if(item[obj].taskCompleted){
        checkboxFinished.setAttribute('checked', 'checked')
    }
    let trashCanImg = document.createElement('img')
    trashCanImg.id = 'delete'
    trashCanImg.src = trash
    dateDeleteCheckedDiv.appendChild(dateText)
    dateDeleteCheckedDiv.appendChild(checkboxFinished)
    dateDeleteCheckedDiv.appendChild(trashCanImg)
    toDoContainer.appendChild(titleTodo)
    toDoContainer.appendChild(dateDeleteCheckedDiv)
    allTodosContainer.appendChild(toDoContainer)   

    trashCanImg.addEventListener('click', ()=>{
        trashCanImg.parentElement.parentElement.remove()
        removeTask(trashCanImg.parentElement.parentElement.firstChild.innerHTML, trashCanImg.parentElement.firstChild.innerHTML)
    })
    checkboxFinished.addEventListener('click', () =>{
        toggleCompleted(checkboxFinished.parentElement.parentElement.firstChild.innerHTML, checkboxFinished.parentElement.firstChild.innerHTML)
        if(checkboxFinished.classList.contains('completedTask')){
            checkboxFinished.classList.remove('completedTask')
        }else{
            checkboxFinished.classList.add('completedTask')
        }
    })
}