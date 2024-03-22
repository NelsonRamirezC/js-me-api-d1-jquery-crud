let alumnos = [
    {id: 1, nombre: "Pedro", apellido: "Pereira"},
    {id: 3, nombre: "Miguel", apellido: "Acevedo"},
    {id: 2, nombre: "Marta", apellido: "Godoy"},
    {id: 4, nombre: "Josefa", apellido: "Castillo"}
];

alumnos.sort((a, b) => a.id - b.id);

console.log(alumnos);