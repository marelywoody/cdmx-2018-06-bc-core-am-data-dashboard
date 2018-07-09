window.computeStudentsStats= (laboratoria,generacion,sede) => {
//console.log(laboratoria,generacion,sede);
fetch(laboratoria).then(function (res) {
return res.json();
})
.then(function (dato) {
   //asi entras aun objeto por medio de una variable :)
    let estudiantesOption = dato[sede].generacion[generacion].estudiantes;
    Object.keys(estudiantesOption).forEach ((estudent)=>{
      let estudiante = estudiantesOption[estudent];
      let cajaEstudiante = document.createElement("article");
      //console.log(cajaEstudiante)
      cajaEstudiante.setAttribute("class","jumbotron");
     //crear nombre
      let nombre1 = document.createElement("p");
      nombre1.appendChild(document.createTextNode('Name: '+ estudiante.nombre));
      cajaEstudiante.appendChild(nombre1);

      let correo = document.createElement("p");
      correo.appendChild(document.createTextNode('Email: ' + estudiante.correo));
      cajaEstudiante.appendChild(correo);

      let programDuration = document.createElement("p");
      programDuration.appendChild(document.createTextNode('Duracion de programa: '+ estudiante.progreso.duracionPrograma));
      cajaEstudiante.appendChild(programDuration );

      let porcentajeDeDuracion = document.createElement("p");
      porcentajeDeDuracion.appendChild(document.createTextNode('Porcenta completado: '+ estudiante.progreso.porcentajeCompletado));
      cajaEstudiante.appendChild(porcentajeDeDuracion );

      let turnoEstudiante = document.createElement("p");
      turnoEstudiante.appendChild(document.createTextNode('Turno: '+ estudiante.turno));
      cajaEstudiante.appendChild(turnoEstudiante );

      let tema = document.createElement("articule");
      tema.appendChild(document.createTextNode('TEMAS'));
      cajaEstudiante.appendChild(tema);

      let entradaTemas = estudiante.progreso.temas
      // console.log(entradaTemas)
      let cajaTemas = document.createElement("articule")
      cajaEstudiante.appendChild(cajaTemas);

      Object.keys(entradaTemas).forEach( (tema)=>{
      let entrandoTemas = entradaTemas[tema];
      //console.log(entrandoTemas)

      let tema1= document.createElement("p");
      tema1.appendChild(document.createTextNode('Tema: '+ tema));
      cajaTemas.appendChild(tema1);

      let porcentajeCompletado = document.createElement("p");
      porcentajeCompletado.appendChild(document.createTextNode("Porcentaje Completado: "+entrandoTemas.porcentajeCompletado))
      cajaTemas.appendChild(porcentajeCompletado);
      //console.log(porcentajeCompletado)

      let duracionTemaCompletado = document.createElement("p");
      duracionTemaCompletado.appendChild(document.createTextNode("Duracion de Tema Completado: "+ entrandoTemas.duracionTemaCompletado))
      cajaTemas.appendChild(duracionTemaCompletado)
        let  entradaSubtemas = entrandoTemas.subtemas
      //console.log(entradaSubtemas)
        let cajaSubtemas = document.createElement("articule")
        cajaTemas.appendChild(cajaSubtemas)

        Object.keys(entradaSubtemas).forEach((subtemas)=>{
          let entrandoSubtemas = entradaSubtemas[subtemas];
          console.log((entradaSubtemas))

          let subtemas1 = document.createElement("p")
          subtemas1.appendChild(document.createTextNode(subtemas))
          cajaSubtemas.appendChild(subtemas1)
          console.log(subtemas1)

          let duracionDeTema =document.createElement("p")
          duracionDeTema.appendChild(document.createTextNode("Duracion: " + entrandoSubtemas.duracionSubtema))
          cajaSubtemas.appendChild(duracionDeTema)

          let tipo =document.createElement("p")
          tipo.appendChild(document.createTextNode("Tipo: " + entrandoSubtemas.tipo))
          cajaSubtemas.appendChild(tipo)

          let completado = document.createElement("p")
          completado.appendChild(document.createTextNode("Completado: " + entrandoSubtemas.completado))
          cajaSubtemas.appendChild(completado)


      })




    })




      document.getElementById('resultadosGeneration').appendChild(cajaEstudiante);
      //console.log(cajaEstudiante)


    })
})
};
window.computeGenerationsStats= (laboratoria,pais) => {

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
   let newElement = document.createElement("option");//creas un elemento opcion
   newElement.setAttribute("value","-1");// le creas un valor al elelmento
   newElement.appendChild(document.createTextNode("Selecciona una generación"))//le creas un hijo con texto
   document.getElementById("generacion").appendChild(newElement);

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
