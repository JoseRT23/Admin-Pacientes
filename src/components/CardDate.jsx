import React from 'react'
import "./CardDate.css"

import { FaTimes } from 'react-icons/fa'

const CardDate = ({ citas=[], dispatch }) => {

    const handleDelete = (id) => {
        const deleteAction = {
            type: "delete",
            payload: id,
        }

        dispatch(deleteAction);
    }

    return (
        <>
            {citas.length === 0 ? <h1 className='my-4' style={styles.title}>No hay citas</h1> : <h1 className='my-4' style={styles.title}>Administra tus citas</h1>}
                {
                    citas.map((cita) => {

                        return <div key={cita.id} className="cardDate my-2" style={{width: '22.5rem'}}>
                                    <p><b>Nombre mascota:</b> {cita.nameMascot}</p>
                                    <p><b>Nombre dueño:</b> {cita.nameOwner}</p>
                                    <p><b>Fecha:</b> {cita.date}</p>
                                    <p><b>Hora:</b> {cita.hour}</p>
                                    <p><b>Sintomas:</b> {cita.symptom}</p>
                               <button onClick={() => handleDelete(cita.id)} >Eliminar cita <FaTimes /> </button>
                               </div>
                    })
                }
                    
            
        </>
    )
}

const styles = {
    title: {
        textTransform: "uppercase",
        fontFamily: "'Anton', sans-serif"
    }
}

export default CardDate
