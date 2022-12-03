import { useState ,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
function App() {

  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente]= useState({})

  //obtiene los datos del local storage
  useEffect(()=>{
    const obtenerLocalStorage=()=>{
      //convierte el string almacenado en local strorage a un arreglo
      let pacientesEnLocalStorage=JSON.parse(localStorage.getItem('pacientes')) ?? []
      //actualiza el state con la data de local storage
      setPacientes(pacientesEnLocalStorage)
    }
  },[])

  //guarda los items en el local storage
  useEffect(()=>{
    //convierte el arreglo en string
    localStorage.setItem('pacientes',JSON.stringify(pacientes))

  },[pacientes])

  const eliminarPaciente=id =>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20 ">
        <Header/>
        <div className="md:mt-12 md:flex">
          <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
        </div>
    </div>
  )
}

export default App
