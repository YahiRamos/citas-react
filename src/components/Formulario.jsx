import { useState, useEffect } from "react"
import Error from "./error"
const Formulario = ({ pacientes, setPacientes,paciente,setPaciente }) => {
  //states
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [alta, setAlta] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)

 useEffect(()=>{
    if(Object.keys(paciente).length >0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  //validamos que todos los campos esten llenos
  const validacion = () => {
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true)
      return true
    }
    setError(false)
    return false
  }
  const mensajeError = "Todos los campos son obligatorios"

  const generarId=()=>{
    let numeroRandom=Math.random().toString(36).substring(2)
    let fecha=Date.now().toString(36)
    return numeroRandom + fecha
  }
  //metodo que se ejecuta cuando mandamos la información con el boton
  const handleSubmit = (e) => {
    //le quitamos la accion por default
    e.preventDefault()

    //validamos los campos, si pasa la validación (error=false)
    //, guarda los datos
    //si no (error=true),solo muestra el error
    if (!validacion()) {
      //creamos un objeto para almacenar los datos de el paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }
      if(paciente.id){
        //si entra aqui es quue seleccionaron modificar registro
        objetoPaciente.id=paciente.id
        const pacientesActualizados=pacientes.map(pacienteState=>
          pacienteState.id === paciente.id ? objetoPaciente:pacienteState)
        setPacientes(pacientesActualizados)  
        setPaciente({})
      }else{
        //sino, es que esta registrando un paciente
        objetoPaciente.id=generarId()
      //mandamos un arreglo, que contenga
      //a todos los pacientes que se registren
      //...pacientes es la copia del arreglo existente
      //paciente es el objeto, que se le agrega
      //al final del arreglo pacientes
        setPacientes([...pacientes,objetoPaciente])
      }
      //reiniciamos el form
      setNombre("")
      setPropietario("")
      setEmail("")
      setAlta("")
      setSintomas("")
    } else {
      return
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Agregar pacientes y {""}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
        onSubmit={handleSubmit}
      >
        {
          //si error es true,manda el mensaje de error
          error && (
            <Error>
              <p>mensajeError</p>
            </Error>
          )
        }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota:
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario:
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email de propietario:
          </label>
          <input
            id="email"
            type="email"
            placeholder="someone@example.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta:
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas:
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion de los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type={"submit"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                hover:bg-indigo-900 cursor-pointer transition-opacity duration-300 rounded-md"
          value={paciente.id ? "Modificar registro":"Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
