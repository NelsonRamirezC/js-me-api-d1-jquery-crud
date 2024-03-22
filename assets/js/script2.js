//1.- AL primer ALUMNO DE LA LISTA DE RANKING LE VAN DAR UN COLOR AMARILLO DE FONDO

//2.- A LOS 3 PRIMEROS ALUMNOS DE LA SECCION DE RANKING LE VAN A DAR UN FONT-SIZE MAYOR
// Y UN FONT-WEIGHT 800 - 900 - BOLD

//3.- en el parrafo <p id="mensaje"></p> colocar un mensaje desde jquery que los motive a seguir avanzando

//4.- al último de la lista atrasados dejarlo con un fondo rojo

//10 minutos -> 20:53

$(function () {
    //FUNCIÓN READY

    //1.-
    const primero = $(".destacado:first");
    primero.css("background-color", "yellow");

    //2.-
    // let RankingTop3styles = $("#ranking .top3");
    // let stylesTop3 = {
    //     fontSize: "25px",
    //     fontWeight: "800",
    // };

    // RankingTop3styles.css(stylesTop3);

    const tresPrimeros = $("#ranking ol li:lt(3)");
    let stylesTop3 = {
        fontSize: "25px",
        fontWeight: "800",
    };

    tresPrimeros.css(stylesTop3);


    //3.- 

    $("#mensaje").text("Recuerda que debes entregar tus desafíos para recibir el subsidio.");

    //4.- 

    const ultimoAlumno = $("#atrasados ul li:last-child");
    console.log("Ultimo alumno: ", ultimoAlumno);
    ultimoAlumno.css("background-color", "red");
});
