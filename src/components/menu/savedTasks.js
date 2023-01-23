import createTasks from "./tasks"

export default function saveTask(taskName){
    let savedTasks = new Array()

    if(localStorage.hasOwnProperty("savedTasks")){
        savedTasks = JSON.parse(localStorage.getItem("savedTasks"))
    }

    console.log(savedTasks)

    savedTasks.push(taskName)
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks))

    return savedTasks
}

export function showSavedTasks(personalTasksContainer){
    let savedTasks = new Array()
    if(localStorage.hasOwnProperty("savedTasks")){
        savedTasks = JSON.parse(localStorage.getItem("savedTasks"))
    }
    for(let obj in savedTasks){
        createTasks(savedTasks[obj], personalTasksContainer)
    }
}