import './pressets.css'
import Heading from './components/header/header.js'
import Menu from './components/menu/menu.js'

loadPage()

function loadPage(){
    let header = new Heading()
    document.getElementById('content').appendChild(header)

    let main = document.createElement('main')
    document.getElementById('content').appendChild(main)

    let menu = new Menu()
    main.appendChild(menu)

    let pageContent = document.createElement('section')
    pageContent.id = 'main-content'
    main.appendChild(pageContent)
    
}