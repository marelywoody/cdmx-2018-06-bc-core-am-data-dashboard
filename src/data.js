const laboratoria = 'https://raw.githubusercontent.com/marelywoody/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

window.onload = () => {
  fetch(laboratoria).then(res => res.json())
    .then((data) => {
      computeStudentsStats(data);
      computeGenerationsStats(data);
      drawSedes(data);
      drawGeneration(data);
      getGeneration(data);
    })
    .catch((error) => {
      console.log('error');
    });
};

window.computeStudentsStats = (data) => {
  const students = [];
  let name;
  let email;
  let status;
  let completedPercentage;
  for (key in data) {
    const generationsGet = Object.keys(data[key].generacion);
    generationsGet.forEach((generationGet) => {
      const studentsGet = data[key].generacion[generationGet].estudiantes;
      for (i in studentsGet) {
        name = studentsGet[i].nombre;
        email = studentsGet[i].correo;
        const themeStats = data[key].generacion[generationGet].estudiantes[i].progreso;
        status = themeStats.duracionPrograma;
        completedPercentage = themeStats.porcentajeCompletado;
        const student = {
          name: name,
          email: email,
          campus: key,
          generation: generationGet,
          stats: {
            status: status,
            completedPercentage: completedPercentage,
            topics: {
              completedPercentage: 0,
              percentageDuration: 0,
              subTopics: {
                completedPercentage: 0,
                type: '',
                duration: 0
              }
            }
          }
        };
        // console.log(student[0].stats.status = themeStats[0]);
        // student[0].stats.completedPercentage = themeStats[1];
        // const theme = data[key].generacion[generationGet].estudiantes[i].progreso.temas;
        students.push(student);
      }
    });
  }
  return students;
};

window.computeGenerationsStats = (data) => {
  const generations = [];
  let average;
  for (key in data) {
    average = 0;
    const getGeneration = Object.keys(data[key].generacion);
    getGeneration.forEach((saveGeneration) => {
      const getStudent = data[key].generacion[saveGeneration].estudiantes;
      for (i in getStudent) {
        const generation = {
          campus: key,
          generation: saveGeneration,
          average: 0,
          count: 0
        };
        average += getStudent[i].progreso.porcentajeCompletado;
        average = average / getStudent.length;
        generation.average = average;
        generation.count = getStudent.length;
        generations.push(generation);
      }
    });
  }
  return generations;
};

window.sortStudents = (laboratoria) => {

};

window.filterStudents = (laboratoria) => {

};
