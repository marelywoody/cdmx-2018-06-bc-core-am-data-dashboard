
let laboratoria = fetch('https://raw.githubusercontent.com/Dani1592/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

window.computeStudentsStats= (laboratoria,pais) => {

    laboratoria.then(function (res) {
        return res.json();

    }).then(function (dato) {

      //console.log(dato[pais].generacion) asi entras aun objeto por medio de una variable :)
        let sedeOption = dato[pais].generacion;
        //console.log(sedeOption)
        Object.keys(sedeOption).forEach( (key) =>{
      //    console.log(key) aqui recorre cada uno de los objetos
          let newElement = document.createElement("option");//creas un elemento opcion
          newElement.setAttribute("value",key);// le creas un valor al elelmento
          newElement.appendChild(document.createTextNode(key + " generación"))//le creas un hijo con texto
          document.getElementById("generacion").appendChild(newElement);
      //le creas un hijo al padre generacion

    })
  })
};

window.computeGenerationsStats= (laboratoria) => {

};

window.sortStudents= (laboratoria) => {

};

window.filterStudents= (laboratoria) => {

};
