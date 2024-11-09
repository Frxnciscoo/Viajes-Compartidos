const verMas = document.getElementById('verMas');
const destinos = document.querySelectorAll('.viajes_opciones .viaje');

verMas.addEventListener('click', () => {
    const quedanOcultos = document.querySelectorAll('.viajes_opciones .oculto').length;
    if (quedanOcultos > 0) {
        destinos.forEach(destino => destino.classList.remove('oculto'));
            verMas.textContent = 'Ver menos'
    } else { 
        destinos.forEach((destino, index) =>{
            if (index >= 3) destino.classList.add('oculto')
    
    });
    verMas.textContent = 'Ver más';
    }


    
});

