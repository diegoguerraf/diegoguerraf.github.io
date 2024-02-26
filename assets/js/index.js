// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el navbar
    var navbar = document.querySelector('.navbar');
    // Si el usuario ha hecho scroll hacia abajo, añade la clase 'navbar-scrolled'
    // De lo contrario, añade la clase 'navbar-transparent'
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.add('navbar-transparent');
    }
});

// Agrega un evento de escucha para detectar el scroll de la ventana
window.addEventListener('scroll', function() {
    // Selecciona el navbar
    var navbar = document.querySelector('.navbar');
    // Si el usuario ha hecho scroll hacia abajo, añade la clase 'navbar-scrolled' y elimina 'navbar-transparent'
    // De lo contrario, elimina 'navbar-scrolled' y añade 'navbar-transparent'
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-transparent');
    }
});

// jQuery para desplazarse suavemente a través de las secciones cuando se hace clic en los enlaces de la barra de navegación
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Inicializa los tooltips para los enlaces que tienen el atributo data-toggle="tooltip"
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
