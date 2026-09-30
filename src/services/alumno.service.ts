import type { Alumno } from "../models/alumno.interface"




const alumnosList: Alumno[] = [
    {
        id: "1",
        nombre: "Kevin sanchez",
        carne: "202460522",
        carrera: "Ingenieria en sistemas"
    },
    {
        id: "2",
        nombre: "Belter martinez",
        carne: "202460523",
        carrera: "Ingenieria en sistemas"
    }
]



const getAllAlumnos = (textShared: string): Alumno[] => {
    if (textShared?.trim()) {
        return alumnosList.filter((alumno) =>
            alumno.nombre.toLowerCase().includes(textShared.toLowerCase())
        );
    }
    return [...alumnosList];
};

const registeralumno = (alumno: Alumno) => {
    const newAlumno: Alumno = {
        id: new Date().toISOString(),
        nombre: alumno.nombre,
        carne: alumno.carne,
        carrera: alumno.carrera
    };

    alumnosList.push(newAlumno);
}



export {
    getAllAlumnos,
    registeralumno
}