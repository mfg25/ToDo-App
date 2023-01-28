import Task from './tasks.js'
import './menu.css'
import PopUp from './add/popUp.js'
import AddButton from './add/addButton.js'
import { showSavedTasks } from './savedTasks.js'

function createMenu(){
    let menuSection = document.createElement('section')
    menuSection.id = 'menu'

    //button menu slider



    //Creating home text

    let homeContainer = document.createElement('div')
    homeContainer.id = 'home'
    let homeText = document.createElement('p')
    homeText.innerText = 'Home'

    homeContainer.appendChild(homeText)
    menuSection.appendChild(homeContainer)

    

    //Creating default tasks

    let mainTasksContainer = document.createElement('div')
    mainTasksContainer.id = 'main-tasks'
    
    let allTasks = new Task('All', mainTasksContainer)

    let importantTasks = new Task('Important', mainTasksContainer)

    let completedTasks = new Task('Completed', mainTasksContainer)
    

    menuSection.appendChild(mainTasksContainer)

    //Creating personal tasks text

    let projectsContainer = document.createElement('div')
    projectsContainer.id = 'container-title'
    let projectsTitle = document.createElement('div')
    projectsTitle.id = 'projects-title'
    menuSection.appendChild(projectsContainer)

    //personal tasks container
    let personalTasksContainer = document.createElement('div')
    personalTasksContainer.id = 'personal-tasks'
    menuSection.appendChild(personalTasksContainer)

    //add button and popUp
    let divAdd = new AddButton(personalTasksContainer)
    let projectsText = document.createElement('p')
    projectsText.innerText = 'Projects'

    projectsTitle.appendChild(projectsText)
    projectsContainer.appendChild(projectsTitle)
    projectsContainer.appendChild(divAdd)
    
    //burguer button 
    document.getElementById('burguer-button-container').addEventListener('click', () =>{
        menuSection.classList.toggle('active')
    })
    
    //
    showSavedTasks(personalTasksContainer)

    return menuSection
}

export default createMenu