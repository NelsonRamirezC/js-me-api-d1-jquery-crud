$(function() { //función ready


    //SELECTOR DE ID
    const sectionProductos = $("#productos");
    //MÉTODO CSS, PERMITE CAMBIAR VALORES A LAS PROPIEDADES CSS;
    //sectionProductos.css("background-color", "red");


    const destacados = $(".destacado");
    //destacados.css("color", "blue");

    
    const itemsFrutas = $("#listaProductos li");
    //console.log(itemsFrutas);

    itemsFrutas.on("click", function(){
        $(this).css("color", "red");
    });

    const textosSecundarios = $("#articulos div > p");
    //console.log(textosSecundarios);


    //CAPTURAR FORMULARIO Y DAR EVENTO SUBMIT

    const formContacto = $("#contacto .form-contacto");
    formContacto.on("submit", function(event){
        event.preventDefault();
       
        const inputNombre = $("#nombre");
        const inputEmail = $("#email");

        console.log("Nombre", inputNombre.val());
        console.log("Email", inputEmail.val());
    });


    //let secciones = $("#contacto, #articulos");
    //console.log(secciones);


    //CAPTURANDO FILAS DE LA TABLA

    const filasTablaImpares = $("#tablaProductos .table tbody tr:even");
    const filasTablaPares= $("#tablaProductos .table tbody tr:odd");

    filasTablaImpares.css("background-color", "green");
    filasTablaPares.css("background-color", "orange");


    //CAPTURANDO CON MÉTOMODO DE BÚSQUEDA
    let elementoBuscado = $("#tablaProductos").find(".destacado");
    let estilos = {
        backgroundColor: "blue",
        color: "white",
        fontSize: "30px"
    };

    elementoBuscado.css(estilos);


    console.log(elementoBuscado);

    

});