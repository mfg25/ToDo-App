import './header.css'
import Check from './check.png'

function Heading(){
    let headerElement = document.createElement('header')
    headerElement.id = 'header'
    //
    let burguerButtonContainer = document.createElement('div')
    let burguerButton = document.createElement('div')
    burguerButtonContainer.id = 'burguer-button-container'
    burguerButton.id = 'burguer-button'
    //
    let pageTitle = document.createElement('h2')
    pageTitle.id = 'page-title'
    pageTitle.innerText = 'ToDo App'

    let checkmark = document.createElement('img')
    checkmark.src = Check
    checkmark.id = 'checkmark'


    burguerButtonContainer.appendChild(burguerButton)
    headerElement.appendChild(burguerButtonContainer)
    headerElement.appendChild(pageTitle)
    headerElement.appendChild(checkmark)

    return headerElement
}

export default Heading