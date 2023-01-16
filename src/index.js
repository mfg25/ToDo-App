import './pressets.css'
import Heading from './components/header/header.js'
import Menu from './components/menu/menu.js'

loadPage()

function loadPage(){
    let header = new Heading()
    document.getElementById('content').appendChild(header)

    let menu = new Menu()
    document.getElementById('content').appendChild(menu)
    
}