import { useState, useEffect } from 'react'
import Title from './components/Title'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'



function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [editPaciente, setEditPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])


  
  
  return (
    <div className="App">
      <Title/>
      <div className='contenedor'>
        <Formulario
            setPacientes={setPacientes}
            pacientes={pacientes}
            editPaciente={editPaciente}
            setEditPaciente={setEditPaciente} />
        <ListadoPacientes
            pacientes={pacientes}
            setPacientes={setPacientes}
            setEditPaciente={setEditPaciente} />
      </div>
    </div>
  )
}

export default App
