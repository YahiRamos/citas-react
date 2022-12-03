const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const {nombre, propietario, email, alta, sintomas,id}=paciente

  const handleEliminar=()=>{
    const request=confirm("¿Deseas borrar el paciente?")
    if(request){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" uppercase font-bold mb-3 text-gray-700">
        Nombre de la Mascota: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className=" uppercase font-bold mb-3 text-gray-700">
        Nombre del propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className=" uppercase font-bold mb-3 text-gray-700">
        Email del propietario: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className=" uppercase font-bold mb-3 text-gray-700">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className=" uppercase font-bold mb-3 text-gray-700">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button type="button" 
        className="py-2 px-10 bg-orange-700 hover:bg-orange-500 
        font-bold uppercase rounded-lg text-white"
        onClick={()=>setPaciente(paciente)}>
            Editar
        </button>

        <button type="button" 
        className="py-2 px-10 bg-red-700 hover:bg-red-500 
        font-bold uppercase rounded-lg text-white"
        onClick={handleEliminar}
        >
          Eliminar  
        </button>
      </div>

    </div>
  )
}

export default Paciente;
