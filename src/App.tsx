import { useEffect, useState } from "react"
import type { Alumno } from "./models/alumno.interface"
import { getAllAlumnos, registeralumno } from "./services/alumno.service";


function App() {


  const [alumnos,setAlumnos] = useState<Alumno[] | null>();
  const [alumnoSelected,setAlumnoSelected] = useState<Alumno>({
    id: "",
    nombre: "",
    carne: "",
    carrera: ""
  });


  const submmit = () => {
    registeralumno(alumnoSelected);

    setAlumnoSelected({
      id: "",
      nombre: "",
      carne: "",
      carrera: ""
    });

    loadAlumnos();
  }


  const loadAlumnos = () => {
    try{
          const response = getAllAlumnos();
          setAlumnos(response);
    }catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    return () => loadAlumnos();
  },[]) 

  return (
    <>
      <h1>2do Parcial Arquitectura de sistemas</h1>

      <div>
        <form action="">
          <div>
              <label >Nombre alumno</label>
              <input id="nombre" type="text" onChange={(e) => setAlumnoSelected((prev) => ({...prev,nombre: e.target.value}))} />
          </div>

          <div>
              <label >Nombre Carnet</label>
              <input id="carne" type="text" onChange={(e) => setAlumnoSelected((prev) => ({...prev,carne: e.target.value}))} />
          </div>

          <div>
              <label >Carrera</label>
              <select onChange={(e) => setAlumnoSelected((prev) => ({...prev,carrera: e.target.value}))}>
                <option value={""}>Seleccciona una carrera</option>
                <option value={"Ingenieria en sistemas"}>Ingenieria en sistemas</option>
                <option value={"Ingenieria en Mecatronica"}>Ingenieria en Mecatronica</option>
              </select>
          </div>

          <button type="button" onClick={submmit}>Enviar</button>
        </form>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <td>
                Nombre
              </td>
              <td>
                Carne
              </td>
              <td>
                Carrera
              </td>
            </tr>
          </thead>
          <tbody>
            {
              alumnos ? (
                alumnos.map((alumno) => {
                  return (
                    <>
                      <tr key={alumno.id}>
                        <td>
                          {alumno.nombre}
                        </td>
                        <td>
                          {alumno.carne}
                        </td>
                        <td>
                          {alumno.carrera}
                        </td>
                      </tr>
                    </>
                  )
                })
              ) : null
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
