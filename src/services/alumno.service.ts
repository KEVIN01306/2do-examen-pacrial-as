import type { Alumno } from "../models/alumno.interface"




const alumnosList: Alumno[] =  [
    {
        id: 1,
        nombre: "Kevin sanchez",
        carne: "202460522",
        carrera: "Ingenieria en sistemas"
    },
    {
        id: 2,
        nombre: "Belter martinez",
        carne: "202460523",
        carrera: "Ingenieria en sistemas"
    }
]



const getAllAlumnos = () => {
    const alumnos =  alumnosList;
    return alumnos;
}




export {
    getAllAlumnos
}