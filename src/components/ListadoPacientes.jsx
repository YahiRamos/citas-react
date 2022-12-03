import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {

  useEffect(() => {
    if(pacientes.length!=0){
      console.log("se ha agregado un nuevo paciente")
    }
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-center mt-5 text-xl mb-10">
            Administracion de {""}
            <span className="text-indigo-600 font-bold ">
              pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Aún no hay pacientes registrados</h2>
          <p className="text-center mt-5 text-xl mb-10">
            Registra uno para que aparezca {""}
            <span className="text-indigo-600 font-bold ">aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
