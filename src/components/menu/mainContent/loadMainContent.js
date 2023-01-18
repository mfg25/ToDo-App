import './loadMainContent.css'

function loadMainContent(contentName){
    document.getElementById('main-content').innerHTML = `<div id="type-selected-container"><h3>${contentName}</h3></div>`
}

export default loadMainContent