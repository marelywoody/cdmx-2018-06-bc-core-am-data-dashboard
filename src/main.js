let body = document.getElementById('cuerpo');
let menu = document.getElementById('menu');
menu.style.display = 'none';
let data = document.getElementById('data');
menu.style.display = 'none';
let buton = document.getElementById('buton');
let sede = document.getElementById('sede');
let generation = document.getElementById('generacion');


buton.addEventListener('click',access);

function access() {
    body.style.display = 'none';
    menu.style.display = 'inline-block'; 
    generation.style.display = 'none';
};

sede.addEventListener('onchange',selet);

function selet(){
    if (sede == 'cdmx') {
        alert('Selecciona una sede');
    } else {
    generation.style.display = 'inline-block';
    }
};