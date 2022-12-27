import { useEffect, useState } from "react"



function Formulario({setPacientes,pacientes,editPaciente,setEditPaciente}) {
    const [mascota, setMascota] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')


    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36)

        return random + date
    }

    useEffect(() => {
      if (Object.values(editPaciente).length > 0) {
        setMascota(editPaciente.mascota)
        setPropietario(editPaciente.propietario)
        setEmail(editPaciente.email)
        setFecha(editPaciente.fecha)
        setSintomas(editPaciente.sintomas)
      }
    }, [editPaciente])
    


    const handleSubmit = e => {
        e.preventDefault()
        // Validacion
        if ([mascota,propietario,email,fecha,sintomas].includes('')) {
            alert('Todos los campos son obligatorios')
            return
        }

        //Creando listado
        const objetoPaciente = {
            mascota : mascota,
            propietario : propietario,
            email : email,
            fecha : fecha,
            sintomas : sintomas,
        }

        
        if (editPaciente.id) {
            objetoPaciente.id = editPaciente.id
            const nuevoPaciente = pacientes.map(paciente => (
                paciente.id === editPaciente.id ? objetoPaciente : paciente
            ))
                setPacientes(nuevoPaciente)
            } else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes,objetoPaciente])
        }

        //Reseteando formulario
        setMascota('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setEditPaciente({})
    }


  return (
    <div className="formulario box">
        <div className="title">
            <h2>Seguimiento pacientes</h2>
            <h3>Añade pacientes y <span className="span">Administralos</span></h3>
        </div>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-box">
                <label htmlFor="mascota">Nombre de la Mascota</label>
                <input 
                    id="mascota" 
                    type="text"
                    onChange={e => setMascota(e.target.value)}
                    value={mascota} />
            </div>
            <div className="form-box">
                <label htmlFor="propietario">Nombre del Propietario</label>
                <input 
                    id="propietario" 
                    type="text"
                    onChange={e => setPropietario(e.target.value)}
                    value={propietario} />
            </div>
            <div className="form-box">
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="mail"
                    onChange={e => setEmail(e.target.value)}
                    value={email} />
            </div>
            <div className="form-box">
                <label htmlFor="fecha">Fecha de alta</label>
                <input 
                    id="fecha" 
                    type="date"
                    onChange={e => setFecha(e.target.value)}
                    value={fecha} />
            </div>
            <div className="form-box">
                <label htmlFor="sintomas">Sintomas</label>
                <textarea 
                    id="sintomas" 
                    type="text"
                    onChange={e => setSintomas(e.target.value)}
                    value={sintomas} />
            </div>
                <input 
                    type="submit" 
                    id="submitbtn" 
                    value={Object.values(editPaciente).length > 0 ? 'Editar paciente' : 'Añadir paciente'} />
        </form>
    </div>
  )
}

export default Formulario