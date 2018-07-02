window.computeStudentsStats= (laboratoria) => {

    laboratoria.then(function (res) {
        return res.json();

    }).then(function (dato) {
        let sedeOption = dato.lima;
        let sedeSave = [];
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