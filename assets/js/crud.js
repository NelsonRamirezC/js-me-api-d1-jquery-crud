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
            <tr>
                <th scope="row">${alumno.id}</th>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>
                    <button class="btn btn-warning" data-id="${alumno.id}" >Actualizar</button>
                    <button class="btn btn-danger" data-id="${alumno.id}">Eliminar</button>    
                </td>
            </tr>
            `;
        };
        cuerpoTabla.html(acumuladorFilas);
    };

    function agregarAlumno(nuevoAlumno){

        alumnos.push(nuevoAlumno);
            let nuevaFila = `
            <tr>
                <th scope="row">${nuevoAlumno.id}</th>
                <td>${nuevoAlumno.nombre}</td>
                <td>${nuevoAlumno.apellido}</td>
                <td>
                    <button class="btn btn-warning" data-id="${nuevoAlumno.id}" >Actualizar</button>
                    <button class="btn btn-danger" data-id="${nuevoAlumno.id}">Eliminar</button>    
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
        alumnos.sort((a, b) => a.id - b.id);
        
        let ultimoAlumno = alumnos[alumnos.length -1];
        let ultimoId = ultimoAlumno.id;

        let nuevoAlumno = {
            id: ultimoId+1,
            nombre,
            apellido
        };

        //agregamos al alumno al array de alumnos

        agregarAlumno(nuevoAlumno);
        //limpio formulario depués de utilizar los datos
        this.reset();


    })
});