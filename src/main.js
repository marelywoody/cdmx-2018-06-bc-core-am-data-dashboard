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
        let data = document.getElementById('data').innerHTML = computeGenerationsStats(laboratoria,'lima');
    } else if (sede == 'mexico') {
        let data = document.getElementById('data').innerHTML = computeGenerationsStats(laboratoria,'mexico');
    } else {
        let data = document.getElementById('data').innerHTML = computeGenerationsStats(laboratoria,'santiago');

    }
};

let generation1 = document.getElementById('generacion');

generation1.addEventListener('change',generationSelect);

function generationSelect () {

    let generation = generation1.value;
//console.log(generation)
  let sede = document.getElementById("sede").value;
  //console.log(sede)
  let result  = document.getElementById('resultadosGeneration').innerHTML = computeStudentsStats(laboratoria,generation,sede);

};

/*funciones de select creados dinamicamente aun en comentarios y con Entlist

let sede = document.getElementById('sede');
let generation = document.getElementById('generacion');

drawSedes = (data) => { 
  let sedes = '';
  const campus = Object.keys(data);
    
  campus.forEach((inst) => {
    sedes += `<option value= "${inst}">${inst}</option>`;
  });
  sede.innerHTML = ` <option disabled selected>Selecciona una sede</option>${sedes}`;
};
drawGeneration = (data) => {
  let generations;

  sede.addEventListener('change', event => {
    menu2.style.display = 'inline-block';
    generation.innerHTML = '<option disabled selected> Selecciona una generación</option>';

    let sedesValue = sede.value;
    sedesValue = data[sedesValue];
        
    Object.values(sedesValue).forEach((getGenerations)=>{
      let getGene = Object.keys(getGenerations);
      getGene.forEach((obtGeneration)=>{
        generations = document.createElement('option');
        generations.setAttribute('value', obtGeneration);
        generations.appendChild(document.createTextNode(obtGeneration + ' generación'));
        document.getElementById('generacion').appendChild(generations);
      });
    });      
  });
};

getGeneration = (data) => {
  generation.addEventListener('change',(event)=>{
    let getGene = generation.value;
    let sedesValue = sede.value;
    computeStudentsStats(data);
  });   
};
*/