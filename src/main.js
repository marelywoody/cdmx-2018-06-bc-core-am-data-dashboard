let body = document.getElementById('cuerpo');

let menu = document.getElementById('menu');

menu.style.display = 'none';
let menu2 = document.getElementById('menu2');

menu2.style.display = 'none';
let data = document.getElementById('data');

data.style.display = 'none';
let buton = document.getElementById('buton');


buton.addEventListener('click',access);

function access() {
    body.style.display = 'none';
    menu.style.display = 'inline-block';
};

let sede1 = document.getElementById('sede');

sede1.addEventListener('change',sedeSelect);

function sedeSelect () {

    let sede = sede1.value;
    menu2.style.display = 'inline-block';

    if (sede == 'lima') {
        let data = document.getElementById('data').innerHTML=computeStudentsStats(laboratoria,'lima');
    } else if (sede == 'cdmx') {
        let data = document.getElementById('data').innerHTML=computeStudentsStats(laboratoria,'mexico');
    } else {
        let data = document.getElementById('data').innerHTML=computeStudentsStats(laboratoria,'santiago');
    }
};

let generation1 = document.getElementById('generacion');

generation1.addEventListener('change',generationSelect);

function generationSelect () {

    let generation = generation1.value;

    if (generation == 'quinta') {
    
    } else if (generation == 'cuarta') {

    } else {

    }
};
