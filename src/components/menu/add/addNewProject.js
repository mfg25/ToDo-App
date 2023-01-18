import createTasks from '../tasks'

function addNewProject(projectName){

    let personalTasksContainer = document.getElementById('personal-tasks')
    let newProject = new createTasks(projectName)
    personalTasksContainer.appendChild(newProject)

}

export default addNewProject