import PopUp from './popUp.js'

function createButton(){
    let divAdd = document.createElement('div')
    divAdd.innerText = 'add'
    divAdd.id = 'add'

    let popUp = new PopUp()
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