import './loadMainContent.css'
import loadTodos from './loadTodos'
import addTodoPopUp from './todoInput/todoInput.js'
import trash from './trash.png'

function loadMainContent(contentName){

    let toDos = new Array()  
    if(document.getElementById('modalAddButton')){
        document.getElementById('modalAddButton').remove()
    }
    if(localStorage.hasOwnProperty("toDos")){
        toDos = JSON.parse(localStorage.getItem("toDos"))
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
    
    for(let obj in toDos){
        let item = JSON.parse(localStorage.getItem('toDos'))
        if(currentPage == 'All'){
            loadTodos(allTodosContainer, item, obj)
        }
        else if(currentPage == 'Important' && item[obj].importantValue){
            loadTodos(allTodosContainer, item, obj)
        }
        else if(item[obj].contentName == currentPage){
            loadTodos(allTodosContainer, item, obj)
        }else if(currentPage == 'Completed' && item[obj].taskCompleted){
            loadTodos(allTodosContainer, item, obj)
        }
    }

    //////////////
    let popUp = new addTodoPopUp()
    document.querySelector('body').appendChild(popUp)
    let addTodoButton = document.getElementById('addTodo')
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
        dateValue = dateValue.replace(/-/g, '/')
        let importantValue = document.getElementById('important-checkbox').checked

        if(localStorage.hasOwnProperty("toDos")){
            toDos = JSON.parse(localStorage.getItem("toDos"))
        }
        toDos.push({titleValue, dateValue, importantValue, contentName, taskCompleted: false})

        localStorage.setItem("toDos", JSON.stringify(toDos))
        popUp.classList.remove('mostrar')
        popUp.remove()
        loadMainContent(contentName)
        
    })

}

export default loadMainContent