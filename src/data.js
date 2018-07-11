// guardamos nuestra ruta en una variable para utilizarla después
const laboratoria = 'https://raw.githubusercontent.com/marelywoody/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
// inicializamos el evento cuando se termine de cargar la página 
window.onload = () => {
  // hacemos el fetch llamando a nuestra variable donde esta guardada la url y 
  // hacemos nuestra primera promesa donde queremos que nos regrese un json
  fetch(laboratoria).then(res => res.json())
    // en la segunda  promesa entramos ya a los datos que se encuentran en nuetsro .json
    .then((data) => { 
      // pasamos los datos del json a las funciones que vamos a utilizar 
      computeStudentsStats(data);
      computeGenerationsStats(data);
      drawSedes(data);
      drawGeneration(data);
      getGeneration(data);
    })
    // en caso de haber un error nos mande en cosola error
    .catch((error) => {
      console.log('error');
    });
};

// inicializamos una funcion con widow para hacerla global
window.computeStudentsStats = (data) => {
  // creamos una variable de tipo array para meter el objeto en el
  const students = [];
  // declaramos las variables que vamos a utilizar dentro de la funcion
  let name;
  let email;
  let status;
  let messsage;
  let completedPercentage;
  let completedPercentage2;
  let percentageDuration;
  let durationTheme;
  let duractionThemeComplete;
  // declaramos uan segunda variable de tipo array para colocar el segundo objeto en ella y meterlo al primer objeto
  let topic = [];
  // hacemos la primera iteracion donde nos ingresa a sedes
  for (key in data) {
    // guardamos en una variable nuestra iteracion convirtiendo en un array de propiedades enumerable de un objeto con Object.keys
    const generationsGet = Object.keys(data[key].generacion);
    // iteramos la variable anterior para obtener las generaciones
    generationsGet.forEach((generationGet) => {
      // declaramos una variable donde le pasamos la especificación en la parte de nuetsra data queremos seguir obteniendo los datos
      const studentsGet = data[key].generacion[generationGet].estudiantes;
      // interamos la variable anterior
      for (i in studentsGet) {
        // name y email fueron declaradas al inicio por lo que solo le pasamos la parte de la data que queremos guardar
        name = studentsGet[i].nombre;
        email = studentsGet[i].correo;
        // volvemos a especificar la parte de la data y la guardamos en una variable que declaramos
        const themeStats = data[key].generacion[generationGet].estudiantes[i].progreso;
        // esta variable tambien fue declarada al inicio y le pasamos la ruta de del dato
        completedPercentage = themeStats.porcentajeCompletado;
        // con este if mandamos un mensaje dependiendo de cual es el procentaje completado por cada estudiante
        if (completedPercentage > 90) {
          messsage = 'La estudiante ha superado el 90% de completitud';
        } else if (completedPercentage >= 60) {
          messsage = 'La estudiante esta en la media de completitud';
        } else {
          messsage = 'La estudiante esta por debajo del 60% de completitud';
        }
        // message que contiene el mensaje lo guardamos en status
        status = messsage;
        // declaramos el objeto con sus propiedades a las cuales les pasaremos los datos obtenidos atraves de las variables en las que fueron guardadas
        const student = {
          name: name,
          email: email,
          campus: key,
          generation: generationGet,
          stats: {
            status: status,
            completedPercentage: completedPercentage,
            topics: topic
          }
        };
        // metemos lo que hemos obtenido en el objeto a nuestro primer arreglo declarado al inicio students
        students.push(student);
        // volveos a especficar la ruta y la guardamos en una variable
        const theme = data[key].generacion[generationGet].estudiantes[i].progreso.temas;
        // con la variable anterior devolvemos un array con los valores de las propiedades
        Object.values(theme).forEach((getTheme) => {
          // completedPercentage2, durationTheme, duractionThemeComplete fueron declaradas al inicio, lo que hacemos es solo guardar los datos que queremos en cada una 
          completedPercentage2 = getTheme.porcentajeCompletado;
          durationTheme = getTheme.duracionTema;
          duractionThemeComplete = getTheme.duracionTemaCompletado;
          // para sacar el porcentaje de duracion hacemos una regla de 3 con los valores obtenidos en las variables anteriores y con Math.round redondiamos el resultado
          percentageDuration = Math.round((duractionThemeComplete * 100) / durationTheme);
          // creamos el segundo objeto que meteremos en el primer obajeto pasando los datos obtenidos
          const topics = {
            completedPercentage: completedPercentage2,
            percentageDuration: percentageDuration,
            // subTopics:subTopics
          };
          // metemos el segundo objeto en la propiedad especificada del primer objeto
          topic.push(topics);
        });
      }
    });
  }
  // retornamos el primer arreglo
  return students;
};

window.computeGenerationsStats = (data) => {
// declaramos las variables que vamos a utilizar dentro de la funcion y además del arreglo donde meteremos el objeto
  const generations = [];
  let average;
  // hacemos la primera iteracion donde nos ingresa a sedes
  for (key in data) {
    average = 0;
    // guardamos en una variable nuestra iteracion convirtiendo en un array de propiedades enumerable de un objeto con Object.keys
    const getGeneration = Object.keys(data[key].generacion);
    // iteramos la variable anterior para entrar a estudiantes
    getGeneration.forEach((saveGeneration) => {
      // entrando a estudiantes volvemos a guardar la ruta en una variable que declaramos
      const getStudent = data[key].generacion[saveGeneration].estudiantes;
      for (i in getStudent) {
        // creamos el objeto donde vamos a almacenar los datos obtenidos
        const generation = {
          campus: key,
          generation: saveGeneration,
          average: 0,
          count: 0
        };
        // guardamos en average el porcentaje completado 
        average += getStudent[i].progreso.porcentajeCompletado;
        // dividimos avarage entre el numero de estudiantes para obtener el porcetaje
        average = Math.round(average / getStudent.length);
        generation.average = average;
        // obtenemos el numero de estudiantes de cada generacion
        generation.count = getStudent.length;
        // metemos lo que hemos obtenido en el objeto a nuestro primer arreglo declarado al inicio students
        generations.push(generation);
      }
    });
  }
  //  retornamos el primer arreglo
  return generations;
};

window.sortStudents = (laboratoria) => {

};

window.filterStudents = (laboratoria) => {

};