import {FaTrashAlt, FaPen} from "react-icons/fa"

function ListadoPacientes({pacientes,setPacientes,setEditPaciente}) {

const handleEliminar = pacienteId => {
  const filtroPacientes = pacientes.filter(paciente => paciente.id !== pacienteId)
  setPacientes(filtroPacientes)
}


  return (
    <div className="listado box">
      <div className="title">
        <h2>Listado pacientes</h2>
        {
          pacientes.length ? 
            <h3>Adiministra tus <span className="span">Pacientes y citas</span></h3>
            :
            <h3>Aun no tienes pacientes, <span className="span">Empieza a agregarlos</span></h3>
        }
      </div>
      <div className="pacientes">
        {
          pacientes.map(paciente => (
            <div key={paciente.id} className="paciente">
                <p>Nombre de la mascota: <span>{paciente.mascota}</span></p>
                <p>Nombre del propietario: <span>{paciente.propietario}</span></p>
                <p>Email: <span>{paciente.email}</span></p>
                <p>Fecha de alta: <span>{paciente.fecha}</span></p>
                <p>Sintomas: <span>{paciente.sintomas}</span></p>
                <div className="botones">
                    <FaPen className="edit" onClick={() => setEditPaciente(paciente)}/>
                    <FaTrashAlt className="delete" onClick={() => handleEliminar(paciente.id)}/>
                </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default ListadoPacientes