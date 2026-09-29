import { useEffect, useState } from "react"
import type { Alumno } from "./models/alumno.interface"
import { getAllAlumnos } from "./services/alumno.service";


function App() {


  const [alumnos,setAlumnos] = useState<Alumno[] | null>();


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
