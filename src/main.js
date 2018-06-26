let sede1 = document.getElementById('sede');
let buton = document.getElementById('buton');


buton.addEventListener('click',prueba);

function prueba(){
    let laboratoria = fetch('../data/laboratoria.json');
    data.computeStudentsStats(laboratoria);
};