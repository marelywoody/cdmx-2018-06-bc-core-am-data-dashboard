window.data = {

    computeStudentsStats: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data){
                let obtenidos = data.lima.generacion.cuarta.estudiantes;
                let contenedor;
                obtenidos.forEach(element => {
                    contenedor= `${element.name}`;
                    console.log(element.correo)
                });
                console.log(contenedor);
            })
    },


    
    computeGenerationsStats: () => {

    },

    sortStudents: () => {

    },

    filterStudents: () => {

    }

};
/*


fetch('../data/laboratoria.json')
.then(function(res){
    return res.json();
})
.then(function(data){
        let laboratoria = data.lima.generacion.cuarta.estudiantes;
       let resultado = JSON.stringify(laboratoria);
       console.log(resultado);
        document.getElementById('resultado').innerHTML = resultado;
})*/