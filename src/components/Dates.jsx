import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { PatientsReducer } from '../reducers/PatientsReducer'
import CardDate from './CardDate'
import FormAdd from './FormAdd'
import "./Dates.css"


const init = () => {
    const cita = localStorage.getItem("cita") //se obtiene local storage
    return cita ? JSON.parse(cita) : [] //si contactos existe transforma el state transformado en string y lo pasa a codigo js
}

const Dates = () => {

    const [state, dispatch] = useReducer(PatientsReducer, [], init); //se crea un dispatch
    
    useEffect(() => {
        localStorage.setItem("cita", JSON.stringify(state)) //se crea el local storage y el estado se convierte en un string
    }, [state])

    return (
        <div className='container'>

                <div className='form mx-4'>
                    <FormAdd dispatch={dispatch}/> {/* se envia el dispatch al componente */}
                </div>

                <div className='mx-4 mb-5'>
                    <CardDate citas={state} dispatch={dispatch}/> {/* se envia el estado con sus valores al componente card para que los muestre tambien en dispatch para borrar*/}       
                </div>

            
        </div>
    )
}

export default Dates
