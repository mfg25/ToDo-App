import './todoInput.css'

function addTodoPopUp(){
    let modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')
    modalContainer.id = 'modalAddButton'
    modalContainer.innerHTML = `<div class="todo-form">
    <button id="close">X</button>
      <h2 id="todo-form-title">New ToDo</h2>
      <form action="" id="form">
        <label for="todoTitle" class="label">ToDo:</label>
        <input
          type="text"
          id="todoTitle"
          placeholder="What to do?"
          required
          maxlength="100s"
        />
        <label for="date">Date:</label>
        <input type="date" id="date" />
        <div id="container-important">
          <label for="important-checkbox">Important</label>
          <input type="checkbox" id="important-checkbox" />
        </div>
        <button type="submit" id="submitButton">Submit</button>
      </form>
  </div>`

    return modalContainer
}

export default addTodoPopUp