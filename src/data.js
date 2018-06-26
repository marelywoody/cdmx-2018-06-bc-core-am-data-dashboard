window.data = {

    computeStudentsStats: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data){
                let obtenidos = data.lima.generacion.cuarta.estudiantes;
                console.log(data.lima.generacion.cuarta.estudiantes)
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<li>${element.nombre}</li>`;
                    console.log(element.nombre)

                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
                console.log(retornados);
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