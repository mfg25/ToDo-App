import Task from './tasks.js'
import './menu.css'
import PopUp from './add/popUp.js'
import AddButton from './add/addButton.js'
import { showSavedTasks } from './savedTasks.js'

function createMenu(){
    let menuSection = document.createElement('section')
    menuSection.id = 'menu'

    //menu slider

    let buttonSlider = document.createElement('button')
    buttonSlider.innerHTML = 'Menu'
    buttonSlider.id = 'button-menu-slider'
    menuSection.appendChild(buttonSlider)
    

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

    let navContainer = document.createElement('div')
    navContainer.id = 'nav-container'
    navContainer.appendChild(homeContainer)
    navContainer.appendChild(mainTasksContainer)
    navContainer.appendChild(projectsContainer)
    navContainer.appendChild(personalTasksContainer)

    menuSection.appendChild(navContainer)
    showSavedTasks(personalTasksContainer)

    //button slider eventlistener click

    buttonSlider.addEventListener('click', ()=>{
        navContainer.classList.toggle('active')
    })


    return menuSection
}

function toggleMenu(){
    let navContainer = document.getElementById('nav-container')
    navContainer.classList.add('active')
}

export default createMenu