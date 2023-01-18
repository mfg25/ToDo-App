import loadContent from './mainContent/loadMainContent.js'

function createTasks(text){
    let div = document.createElement('div')
    div.classList.add("tasks");

    let divText = document.createElement('p')
    divText.innerText = `${text}`
    div.appendChild(divText)

    //active class 
    div.addEventListener('click', () =>{
        for (let i = 0; i <  document.getElementById('main-tasks').childNodes.length; i++) {
            document.getElementById('main-tasks').childNodes[i].classList.remove('active');
        }
        for (let i = 0; i <  document.getElementById('personal-tasks').childNodes.length; i++) {
            document.getElementById('personal-tasks').childNodes[i].classList.remove('active');
        }
        div.classList.add('active')
        loadContent(div.innerText)
    })

    return div
}

export default createTasks