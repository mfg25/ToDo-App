import './loadMainContent.css'
import addTodoPopUp from './todoInput/todoInput.js'

import trash from './trash.png'
function loadMainContent(contentName){

    let usuarios = new Array()  
    if(document.getElementById('modalAddButton')){
        document.getElementById('modalAddButton').remove()
    }
    if(localStorage.hasOwnProperty("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"))
    }
    if(contentName == 'All' ||contentName == 'Important' || contentName == 'Completed'){
        document.getElementById('main-content').innerHTML = `
        <div id="title-add-container">
            <div id="type-selected-container"><h3>${contentName}</h3></div>
        </div>`
    }else{
        document.getElementById('main-content').innerHTML = `
        <div id="title-add-container">
            <div id="type-selected-container"><h3>${contentName}</h3></div>
        </div>
        <button id="addTodo">+</button>`
    }
    
    let allTodosContainer = document.createElement('div')
    allTodosContainer.id = 'all-todos-container'
    document.getElementById('title-add-container').appendChild(allTodosContainer)
    let currentPage = contentName
    
    for(let obj in usuarios){
        let item = JSON.parse(localStorage.getItem('usuarios'))
        if(item[obj].contentName == currentPage){
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
    }

    //////////////
    let popUp = new addTodoPopUp()
    document.querySelector('body').appendChild(popUp)
    let addTodoButton = document.getElementById('addTodo')
    console.log(addTodoButton)
    console.log(popUp)
    addTodoButton.addEventListener('click', () => {
        popUp.classList.add('mostrar')
    })
    let closeButton = popUp.firstChild.children[0];
    let submitTodoButton = popUp.children[0].children[2].children[5]
    closeButton.addEventListener("click", () =>{
        popUp.classList.remove('mostrar')
   });
    
    //////////////
    submitTodoButton.addEventListener('click', (e) =>{
        e.preventDefault()

        let titleValue = document.getElementById('todoTitle').value
        
        let dateValue = document.getElementById('date').value

        let importantValue = document.getElementById('important-checkbox').checked

        

        if(localStorage.hasOwnProperty("usuarios")){
            usuarios = JSON.parse(localStorage.getItem("usuarios"))
        }
        usuarios.push({titleValue, dateValue, importantValue, contentName})

        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        popUp.classList.remove('mostrar')
        popUp.remove()
        loadMainContent(contentName)
        
    })

  

}

export default loadMainContent