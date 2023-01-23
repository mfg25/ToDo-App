import './popUp.css'
import createTasks from '../tasks'
import saveTask from '../savedTasks'


function createPopUp(personalTasksContainer){
    let modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')
    modalContainer.innerHTML = `<div class="form">
    <button id="close">X</button>
    <h2 id="form-title">New project</h2>
    <form action="">
      <label for="projectName" class="label">Name</label>
      <input
        type="text"
        id="projectName"
        placeholder="Project name"
        required
        maxlength="20s"
      />
      <button type="submit" id="submitButton" value="Submit">Submit</button>
    </form>
  </div>`

    //get input value
    let submitButton = modalContainer.firstChild.children[2].children[2]
    submitButton.addEventListener("click", (e) =>{
        e.preventDefault()
        let name = document.getElementById('projectName')
        let nameValue = name.value
        if(nameValue.length != 0){
            modalContainer.classList.remove('mostrar')
            saveTask(nameValue)
            createTasks(nameValue, personalTasksContainer)
        }
    });


  return modalContainer
}

export default createPopUp;