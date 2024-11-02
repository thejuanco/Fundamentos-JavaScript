//Ver un elemento del HTML, si estamos en el elemento o no
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        if(entries[0]){
            console.log("Ya esta visible")
        }
    })

    //Inicializar el objeto observador
    observer.observe(document.querySelector('.premium'))
})