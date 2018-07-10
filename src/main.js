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
    computeStudentsStats(data);
  });   
};