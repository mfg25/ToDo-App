import PopUp from './popUp.js'

function createButton(personalTasksContainer){
    let divAdd = document.createElement('div')
    divAdd.innerText = 'add'
    divAdd.id = 'add'

    let popUp = new PopUp(personalTasksContainer)
    document.querySelector('body').appendChild(popUp)
    divAdd.addEventListener("click", () =>{
        popUp.classList.add('mostrar')
    });

    let closeButton = popUp.firstChild.children[0];

    closeButton.addEventListener("click", () =>{
        popUp.classList.remove('mostrar')
    });
    
    return divAdd
}

export default createButton