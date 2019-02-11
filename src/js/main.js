const selectSede = document.getElementById('select-sede');
const selectGeneration = document.getElementById('select-generation');

window.dataLabo = {
  sedes: (data) => {
    let sede = '';
    getSede = Object.keys(data);
    getSede.forEach(element => {
      sede += `
      <option value="${element}">${element}</option>
      `;
    });
    selectSede.innerHTML = `
    <option disabled selected>Selecciona una sede</option>${sede}
    `;
  },
  generations: (data) => {
    selectSede.addEventListener('change', event => {
      let generation = '';
      let sedeSelection = selectSede.value;
      sedeSelection = data[sedeSelection];
      Object.values(sedeSelection).forEach(elements => {
        let getGeneration = Object.keys(elements);
        getGeneration.forEach(element => {
          generation += `
          <option value="${element}">${element}</option>
          `;
        });
      });
      selectGeneration.style.display = 'inline-block';
      selectGeneration.innerHTML = `
      <option disabled selected>Selecciona una generación</option>${generation}
      `;
    });
  },
};