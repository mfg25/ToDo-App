import loadMainContent from '../mainContent/loadMainContent.js';

function createTasks(text, selectedContainer){
    let div = document.createElement('div')
    div.classList.add("tasks");

    let divText = document.createElement('p')
    divText.innerText = `${text}`
    div.appendChild(divText)
        
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