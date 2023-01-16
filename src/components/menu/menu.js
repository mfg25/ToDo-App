import Task from './tasks.js'
import './menu.css'

function createMenu(){
    let menuSection = document.createElement('section')
    menuSection.id = 'menu'

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
    let allTasks = new Task('All')
    mainTasksContainer.appendChild(allTasks)

    let importantTasks = new Task('Important')
    mainTasksContainer.appendChild(importantTasks)

    let completedTasks = new Task('Completed')
    mainTasksContainer.appendChild(completedTasks)

    menuSection.appendChild(mainTasksContainer)

    //Creating personal tasks text

    let projectsContainer = document.createElement('div')
    projectsContainer.id = 'container-title'
    let projectsTitle = document.createElement('div')
    projectsTitle.id = 'projects-title'
    //add button
    let divAdd = document.createElement('div')
    divAdd.innerText = 'add'
    divAdd.id = 'add'
    //
    let projectsText = document.createElement('p')
    projectsText.innerText = 'Projects'


    projectsTitle.appendChild(projectsText)
    projectsContainer.appendChild(projectsTitle)
    projectsContainer.appendChild(divAdd)
    menuSection.appendChild(projectsContainer)

    return menuSection
}

export default createMenu