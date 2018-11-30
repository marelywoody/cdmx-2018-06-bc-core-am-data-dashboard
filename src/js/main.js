// declaramos las variables en donde queremos que se guarden nuestros valores de los id obtenidos con getElementId de los id de html
let body = document.getElementById('cuerpo');
// ocultamos los elementos que no queremos que se muestren al cargar la página
let menu = document.getElementById('menu');
menu.style.display = 'none';

let menu2 = document.getElementById('menu2');
menu2.style.display = 'none';

let buton = document.getElementById('buton');
// hacemos un evento para cuando el boton buton sea precionado
buton.addEventListener('click', access);
// función del evento
function access() {
  // le decimos que cuando sea presionado oculte lo primero que se mostro al cargar la página y que muestro lo que estaba oculto
  body.style.display = 'none';
  menu.style.display = 'inline-block';
};
// declaramos las variables que mandaran a llamar el contenido de nuetsros botones select
let sede = document.getElementById('sede');
let generation = document.getElementById('generacion');
// drawSede esta funcion lo que hace es crear dinamicamente las opciones de nuestro select sedes
drawSedes = (data) => {
  // declaramos una variable donde guardaremos las iteraciones de sedes
  let sedes = '';
  // creamos una variable y le pasamos un array del objeto
  const campus = Object.keys(data);
  // iteramos la variable anterior para obeter las sede
  campus.forEach((inst) => {
    // en cada iteración creamos un option con una sede diferente
    sedes += `<option value= "${inst}">${inst}</option>`;
  });
  // imprimimos en el select de html los option creados en la iteración y además le agramaos otro option disabled
  sede.innerHTML = ` <option disabled selected>Selecciona una sede</option>${sedes}`;
};

// drawGeneration esta funcion obtiene las generaciones dependiendo de la sede seleccionanda
drawGeneration = (data) => {
  // declaramos una variable donde guardaremos las opciones
  let generations;
  // creamos un evento para la selección de sede
  sede.addEventListener('change', event => {
    // al presionar una sede nos mostrara el segundo select que es el de generaciones
    menu2.style.display = 'inline-block';
    // le cramos una option disabled
    generation.innerHTML = '<option disabled selected> Selecciona una generación</option>';
    // creamos una variable donde se pasa el valor de la sede seleccionada y dependiendo de esa sede es las generaciones que se busca en la data
    let sedesValue = sede.value;
    sedesValue = data[sedesValue];
    // iteramos la data para las sedes
    Object.values(sedesValue).forEach((getGenerations)=>{
      // declaramos una variable donde le pasamos el array de las propiedades del objeto
      let getGene = Object.keys(getGenerations);
      // iteramos una segunda vez las generaciones
      getGene.forEach((obtGeneration)=>{
        // en nuestra variable declara al inicio creamos un elemento option
        generations = document.createElement('option');
        // le creamos un atributo pasandoles las generaciones
        generations.setAttribute('value', obtGeneration);
        // le agramaos un nodo y ademas de un texto adjunto en lo que aparecera en la option del select
        generations.appendChild(document.createTextNode(obtGeneration + ' generación'));
        // imprimimos en el html el nodo
        document.getElementById('generacion').appendChild(generations);
      });
    });
  });
};
// en esta funcion creamos el evento para el segundo select generaciones
getGeneration = (data) => {
  generation.addEventListener('change',(event)=>{
    let getGene = generation.value;
    let sedesValue = sede.value;
    let dataEstudiantes = computeStudentsStats(data);
    drawStudents(dataEstudiantes)

  });
};
drawStudents = (data) => {
  let cajaGeneraciones = document.getElementById('resultadosGeneration');
  
  if (cajaGeneraciones.hasChildNodes()) {
    while (cajaGeneraciones.childNodes.length >= 1) {
      cajaGeneraciones.removeChild(cajaGeneraciones.firstChild);
    }
  }
  let sede = document.getElementById('sede').value;
  let generation = document.getElementById('generacion').value;
  var estudianteSede = data.filter((estudiante) => {
    if (estudiante.campus == sede && estudiante.generation == generation) {
      return estudiante;
    }
  });
  estudianteSede.forEach((estudiante) => {
    let cajaEstudiante = document.createElement('article');
    // console.log(cajaEstudiante)
    cajaEstudiante.setAttribute('class', 'jumbotron');
  
    let nombre1 = document.createElement('p');
    nombre1.appendChild(document.createTextNode('Name: ' + estudiante.name));
    cajaEstudiante.appendChild(nombre1);
    let correo = document.createElement('p');
    correo.appendChild(document.createTextNode('Email: ' + estudiante.email));
    cajaEstudiante.appendChild(correo);
  
    let generacion = document.createElement('p');
    generacion.appendChild(document.createTextNode('Generación: ' + estudiante.generation));
    cajaEstudiante.appendChild(generacion);
  
    let campus = document.createElement('p');
    campus.appendChild(document.createTextNode('Campus: ' + estudiante.campus));
    cajaEstudiante.appendChild(campus);
    cajaGeneraciones.appendChild(cajaEstudiante);
  });
};

