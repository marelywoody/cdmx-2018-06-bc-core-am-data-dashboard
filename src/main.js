let body = document.getElementById('cuerpo');

let menu = document.getElementById('menu');
menu.style.display = 'none';

let menu2 = document.getElementById('menu2');
menu2.style.display = 'none';

let buton = document.getElementById('buton');

buton.addEventListener('click', access);

function access() {
  body.style.display = 'none';
  menu.style.display = 'inline-block';
};

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
    let dataEstudiantes = computeStudentsStats(data);
    drawStudents(dataEstudiantes)

  });
};
drawStudents = (data) => {
let cajaGeneraciones =   document.getElementById('resultadosGeneration')

if(cajaGeneraciones.hasChildNodes()) {

  while(cajaGeneraciones.childNodes.length >= 1){
    cajaGeneraciones.removeChild(cajaGeneraciones.firstChild);
  }}
let sede = document.getElementById('sede').value;
let generation = document.getElementById('generacion').value;
var estudianteSede = data.filter((estudiante) => {
    if(estudiante.campus ==  sede && estudiante.generation == generation
    ){
 return estudiante
  }
})
estudianteSede.forEach((estudiante)=>{

  let cajaEstudiante = document.createElement("article");
  // console.log(cajaEstudiante)
  cajaEstudiante.setAttribute("class","jumbotron");

  let nombre1 = document.createElement("p");
  nombre1.appendChild(document.createTextNode('Name: '+ estudiante.name));
  cajaEstudiante.appendChild(nombre1);
  let correo = document.createElement("p");
  correo.appendChild(document.createTextNode('Email: ' + estudiante.email));
  cajaEstudiante.appendChild(correo);

  let generacion = document.createElement("p");
  generacion.appendChild(document.createTextNode('Generación: '+ estudiante.generation));
  cajaEstudiante.appendChild(generacion );

  let campus = document.createElement("p");
  campus.appendChild(document.createTextNode('Campus: '+ estudiante.campus));
  cajaEstudiante.appendChild(campus );

cajaGeneraciones.appendChild(cajaEstudiante);
})

}
