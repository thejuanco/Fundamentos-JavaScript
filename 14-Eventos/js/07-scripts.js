//Prevenir el event bubling con delegation 

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')) {
        console.log('click titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('click precio');
    }
    if(e.target.classList.contains('info')) {
        console.log('click info');
    }

//El delegation consiste en tener un delector principal y utilizamos e.target para conocer a que elemento le dimos 
//click y agregamos funciones o codigo que se asocien con ese elemento.  
});