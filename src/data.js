let laboratoria = fetch('https://raw.githubusercontent.com/Dani1592/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

window.computeStudentsStats= (laboratoria) => {

    laboratoria.then(function (res) {
        return res.json();

    }).then(function (dato) {
        let sedeOption = dato.lima;
        let sedeSave = '';
        sedeOption.forEach(element => {
            sedeSave += `<li>${element.generacion}</li>`;
            console.log(element.generacion);
        });
    })
};

window.computeGenerationsStats= (laboratoria) => {

};

window.sortStudents= (laboratoria) => {

};

window.filterStudents= (laboratoria) => {

};
