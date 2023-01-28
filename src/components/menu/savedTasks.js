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

export function removeTask(taskName, taskDate){
    let usuarios = new Array

    usuarios = JSON.parse(localStorage.getItem("usuarios"))

    usuarios = usuarios.filter(function(item) {
        return item.titleValue !== taskName && item.dateValue !== taskDate;
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    
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

export function toggleCompleted(taskName, taskDate){
    let usuarios = new Array()

    usuarios = JSON.parse(localStorage.getItem("usuarios"))
    
    usuarios.forEach(element => {
        if(element.titleValue == taskName && element.dateValue == taskDate){
            if(element.taskCompleted == true){
                element.taskCompleted = false
            }else{
                element.taskCompleted = true
            }
        }
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

export function removeProject(projectDiv, projectName){
    let savedTasks = new Array()
    savedTasks = JSON.parse(localStorage.getItem("savedTasks"))
    console.log(projectName)
    savedTasks.forEach(element => {
        if(element == projectName){
            projectDiv.remove()

        }
    });
    savedTasks = savedTasks.filter(function(item) {
        return item != projectName;
    });
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks))

}