import './loadMainContent.css'

function loadMainContent(contentName, projectTodos){
    document.getElementById('main-content').innerHTML = `
    <div id="title-add-container">
        <div id="type-selected-container"><h3>${contentName}</h3></div>
        <button id="addTodo">+</button>
    </div>`

}

export default loadMainContent