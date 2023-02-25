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
    let toDos = new Array

    toDos = JSON.parse(localStorage.getItem("toDos"))

    toDos = toDos.filter(function(item) {
        return item.titleValue !== taskName && item.dateValue !== taskDate;
    });
    localStorage.setItem("toDos", JSON.stringify(toDos))
    
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
    let toDos = new Array()

    toDos = JSON.parse(localStorage.getItem("toDos"))
    
    toDos.forEach(element => {
        if(element.titleValue == taskName && element.dateValue == taskDate){
            if(element.taskCompleted == true){
                element.taskCompleted = false
            }else{
                element.taskCompleted = true
            }
        }
    });

    localStorage.setItem("toDos", JSON.stringify(toDos))
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