import loadMainContent from '../mainContent/loadMainContent.js';
import { removeProject } from './savedTasks.js';

function createTasks(text, selectedContainer){
    let div = document.createElement('div')
    div.classList.add("tasks");

    let divText = document.createElement('p')
    divText.innerText = `${text}`
    div.appendChild(divText)

    //remove project button
    if(text != 'All' && text != 'Important' && text != 'Completed'){
        let removeButton = document.createElement('p')
        removeButton.innerText = 'X'
        div.appendChild(removeButton)
        removeButton.id = 'remove-button'
        div.addEventListener('mouseover', (e)=>{
            removeButton.classList.add('show-button')
        })
        div.addEventListener('mouseout', (e)=>{
            removeButton.classList.remove('show-button')
        })
        removeButton.addEventListener('click', (e)=>{
            e.stopPropagation();
            removeProject(div ,removeButton.parentElement.firstChild.innerHTML)
        })
    }
    selectedContainer.appendChild(div)

    //active class 
    div.addEventListener('click', () =>{
        for (let i = 0; i <  document.getElementById('main-tasks').childNodes.length; i++) {
            document.getElementById('main-tasks').childNodes[i].classList.remove('active');
        }
        for (let i = 0; i <  document.getElementById('personal-tasks').childNodes.length; i++) {
            document.getElementById('personal-tasks').childNodes[i].classList.remove('active');
        }
        div.classList.add('active')
        loadMainContent(text)
    })


}

export default createTasks