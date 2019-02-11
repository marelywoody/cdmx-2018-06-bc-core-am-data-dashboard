const laboratoriaData = 'https://raw.githubusercontent.com/marelywoody/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

window.onload = () => {
  fetch(laboratoriaData)
    .then(res => res.json())
    .then(data => {
      dataLabo.sedes(data);
      dataLabo.generations(data);
    })
    .catch(error => {
      console.log(error);
    });
};

window.computeStudentsStats = () => {
  
};

window.computeGenerationsStats = () => {

};

window.sortStudents = () => {

};

window.filterStudents = () => {
  
};