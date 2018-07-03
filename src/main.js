let laboratoria = 'https://raw.githubusercontent.com/Dani1592/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

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
    sedeCreate()
};

let sede1 = document.getElementById('sede');


sede1.addEventListener('change',sedeSelect);
function sedeCreate (){
  fetch(laboratoria).then(function (res) {
    return res.json();

  }).then(function (dato){
    console.log(dato);
    let sedeOption = dato;
    Object.keys(sedeOption).forEach((sede) =>{
      let sedePais = document.createElement("option");
      sedePais.setAttribute("value",sede);
      sedePais.appendChild(document.createTextNode(sede));
      document.getElementById("sede").appendChild(sedePais);
})
}  )
}

function sedeSelect () {

    let sede = sede1.value;
    menu2.style.display = 'inline-block';

    if (sede == 'lima') {
        let data = document.getElementById('data').innerHTML = computeStudentsStats(laboratoria,'lima');
    } else if (sede == 'mexico') {
        let data = document.getElementById('data').innerHTML = computeStudentsStats(laboratoria,'mexico');
    } else {
        let data = document.getElementById('data').innerHTML = computeStudentsStats(laboratoria,'santiago');

    }
};

let generation1 = document.getElementById('generacion');

generation1.addEventListener('change',generationSelect);

function generationSelect () {

    let generation = generation1.value;
//console.log(generation)
  let sede = document.getElementById("sede").value;
  //console.log(sede)
  let result  = document.getElementById('resultadosGeneration').innerHTML = computeGenerationsStats(laboratoria,generation,sede);

};
