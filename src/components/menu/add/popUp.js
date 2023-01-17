import './popUp.css'

function createPopUp(){
    let modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')
    modalContainer.id = 'modalAddButton'
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
        maxlength="100s"
      />
      <button type="submit" id="submitButton" value="Submit">Submit</button>
    </form>
  </div>`


  return modalContainer
}

export default createPopUp;