$(function () {

    const alumnos = [
        {id: 1, nombre: "Pedro", apellido: "Pereira"},
        {id: 3, nombre: "Miguel", apellido: "Acevedo"},
        {id: 2, nombre: "Marta", apellido: "Godoy"},
        {id: 4, nombre: "Josefa", apellido: "Castillo"}
    ];

    const cuerpoTabla = $("#cuerpoTabla");

    function agregarAlumnos(alumnosRecibidos){
        alumnos.sort((a, b) => a.id - b.id);

        let acumuladorFilas = "";
        for (const alumno of alumnosRecibidos) {

            acumuladorFilas += `
            <tr id="fila-${alumno.id}">
                <th scope="row">${alumno.id}</th>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>
                    <button class="btn-update btn btn-warning" data-id="${alumno.id}
                    " data-bs-toggle="modal" data-bs-target="#updateModal">Actualizar</button>
                    <button class="btn-delete btn btn-danger" data-id="${alumno.id}">Eliminar</button>    
                </td>
            </tr>
            `;
        };
        cuerpoTabla.html(acumuladorFilas);
    };

    function agregarAlumno(nuevoAlumno){

        alumnos.push(nuevoAlumno);
            let nuevaFila = `
            <tr id="fila-${nuevoAlumno.id}">
                <th scope="row">${nuevoAlumno.id}</th>
                <td>${nuevoAlumno.nombre}</td>
                <td>${nuevoAlumno.apellido}</td>
                <td>
                    <button class="btn-update btn btn-warning" data-id="${nuevoAlumno.id}"data-bs-toggle="modal" data-bs-target="#updateModal">Actualizar</button>
                    <button class="btn-delete btn btn-danger" data-id="${nuevoAlumno.id}">Eliminar</button>    
                </td>
            </tr>
            `;
        cuerpoTabla.append(nuevaFila);
    }

    function main(){
        agregarAlumnos(alumnos);
    }

    main();


    //LÓGICA AGREGAR ALUMNOS DESDE FORMULARIO

    const agregarForm = $("#agregarForm");
    agregarForm.on("submit", function(event){
        event.preventDefault();

        let nombre = $("#addNombre").val();
        let apellido = $("#addApellido").val();
        
        //ordenamos el array antes de obtener el id del último elemento
        let idAlumno = 0;
        
        if(alumnos.length > 0){
            alumnos.sort((a, b) => a.id - b.id);
            let ultimoAlumno = alumnos[alumnos.length -1];
            idAlumno = ultimoAlumno.id;
        }
    

        let nuevoAlumno = {
            id: idAlumno+1,
            nombre,
            apellido
        };

        //agregamos al alumno al array de alumnos

        agregarAlumno(nuevoAlumno);
        //limpio formulario depués de utilizar los datos
        this.reset();
    })


    //FUNCIÓN ACTUALIZAR DATOS DE USUARIO

    cuerpoTabla.on("click", ".btn-update", function(){
        let idAlumno = this.dataset.id;
        let alumno = alumnos.find(alumno => alumno.id == idAlumno);
        
        //modificar inputs del formulario update
        $("#updateId").val(alumno.id);
        $("#updateNombre").val(alumno.nombre);
        $("#updateApellido").val(alumno.apellido);
    });

     // INICIO FUNCIÓN ELIMINAR DATOS DE USUARIO
    cuerpoTabla.on("click", ".btn-delete", function(){
        // a través del dataset capturamos el id que le dimos al momento de crear los botones
        let idAlumno = this.dataset.id;
        let seguro = confirm("¿Está seguro que dea eliminar al Alumno con id: " + idAlumno);

        if(seguro){

            //BUSCAR ÍNDICE DEL Alumno POR SU ID
            let indiceAlumno = alumnos.findIndex(alumno => alumno.id == idAlumno);

            if(indiceAlumno == -1){
                return alert(`No se encontró un usuario con el id: ${idAlumno}.`)
            }
            
            //ELIMINAR EL USUARIO DEL ARRAY YA CONOCIENDO SU ÍNDICE.
            let retornoDelete = alumnos.splice(indiceAlumno, 1);
            console.log(retornoDelete);

            if(retornoDelete.length == 0){
                return alert("No se pudo eliminar el registro / no existe el registro")
            }else {
                //ACCIONES POSTERIORES A LA ELIMINACIÓN DEL USUARIO DEL ARRAY.
              
                //PRIMERA ALTERNATIVA SERÍA ACTUALIZAR TABLA CON LOS USUARIO QUE QUEDARON
                //agregarAlumnos(alumnos);

                let fila = $(`#fila-${idAlumno}`);
                //elimina la etiqueta tr (fila) por su id
                fila.remove();
            };
            

        }

    });

    //FIN FUNCIÓN ELIMINAR ALUMNOS

    $("#updateForm").on("submit", function(event){
        event.preventDefault();

        //capturar datos del formulario
        let id = $("#updateId").val();
        let nombre = $("#updateNombre").val();
        let apellido = $("#updateApellido").val();

        let alumno = alumnos.find(alumno => alumno.id == id);

        if(alumno){
            alumno.nombre = nombre;
            alumno.apellido = apellido;
            agregarAlumnos(alumnos);
            //ocultar modal usando jquery
            $('#updateModal').modal("hide");
        }else {
            alert("Error al intentar actualizar los datos del usuario.");
        }


    })


    //FUNCIÓN ACTUALIZAR DATOS DE ALUMNOS
    
});