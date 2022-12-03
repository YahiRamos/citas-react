import {useState ,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
function App() {

  //en el state de los pacientes, carga el local storage
  //si el local storage está vacio, el state inicia con un arreglo vacio
  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || [])
  const [paciente,setPaciente]= useState({})

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
