

window.computeStudentsStats= (laboratoria,pais) => {

   fetch(laboratoria).then(function (res) {
 return res.json();
})
 .then(function (dato) {
   //console.log(document.getElementById("generacion").hasChildNodes())
   let generacionSelect = document.getElementById('generacion');
   if (generacionSelect.hasChildNodes()){
     while(generacionSelect.childNodes.length >= 1){
       generacionSelect.removeChild(generacionSelect.firstChild);
     }

   }
    let generacionOption = dato[pais].generacion;
        //console.log(generacionOption)
        Object.keys(generacionOption).forEach( (key) =>{
        //console.log(key) //aqui recorre cada uno de los objetos
          let newElement = document.createElement("option");//creas un elemento opcion
          newElement.setAttribute("value",key);// le creas un valor al elelmento
          newElement.appendChild(document.createTextNode(key + " generación"))//le creas un hijo con texto
         document.getElementById("generacion").appendChild(newElement);

         //le creas un hijo al padre generacion
    })
  })
};

window.computeGenerationsStats= (laboratoria,generacion,sede) => {
console.log(laboratoria,generacion,sede);
fetch(laboratoria).then(function (res) {
return res.json();
})
.then(function (dato) {
  //console.log(dato[pais].generacion) //asi entras aun objeto por medio de una variable :)
    let estudiantesOption = dato[sede].generacion[generacion].estudiantes;
    console.log(estudiantesOption);
    Object.keys(estudiantesOption).forEach ((estudent)=>{
      let estudiante = estudiantesOption[estudent];

      let cajaEstudiante = document.createElement("article");
      cajaEstudiante.setAttribute("class","jumbotron");
      //crear nombre
      let nombre1 = document.createElement("h6");
      nombre1.appendChild(document.createTextNode('name: '+ estudiante.nombre));
      cajaEstudiante.appendChild(nombre1);

      let correo = document.createElement("p");
      correo.appendChild(document.createTextNode('email: ' + estudiante.correo));
      cajaEstudiante.appendChild(correo);

      let programDuration = document.createElement("article");
      programDuration .appendChild(document.createTextNode('Duracion de programa: '+ estudiante.progreso.duracionPrograma));
      cajaEstudiante.appendChild(programDuration );

      document.getElementById('resultadosGeneration').appendChild(cajaEstudiante);



    })
})
};

window.sortStudents= (laboratoria) => {

};

window.filterStudents= (laboratoria) => {

};
