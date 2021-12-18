import React, { useState } from 'react'

import { v4 as uuid } from 'uuid';
import "./Form.css"

const FormAdd = ({dispatch}) => {

    const [data, setData] = useState({nameMascot:"", 
                                      nameOwner:"", 
                                      date:"", 
                                      hour:"", 
                                      symptom:""});
 
    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nameMascot: data.nameMascot,
            nameOwner: data.nameOwner,
            date: data.date,
            hour: data.hour,
            symptom: data.symptom
        }
    }

    const onSubmit = () => {
        dispatch(actionAdd); //enviar actionAdd al dispatch
        setData({nameMascot:"", 
                nameOwner:"", 
                date:"", 
                hour:"", 
                symptom:""})//para que se limpien los campos
    }

    return (
        <div>

        <h1 className='my-4' style={{textTransform:"uppercase" , fontFamily:"'Anton', sans-serif"}}>Agregar cita</h1>

        <form className='formulario my-4'>
            <label className="">
                 Nombre Mascota: 
                    <input onChange={handleChange}
                        name="nameMascot"
                        value={data.nameMascot} 
                        type="text" 
                        className="form-control"                                   
                        autoComplete="off" 
                        required={true}
                    />                                   
            </label>

            <label className="">
                 Nombre Dueño: 
                    <input onChange={handleChange}
                        name="nameOwner"
                        value={data.nameOwner} 
                        type="text" 
                        className="form-control"                                   
                        autoComplete="off" 
                        required={true}
                    />                                   
            </label>
        
            <label className="">
                 Fecha: 
                    <input onChange={handleChange}
                        name="date"
                        value={data.date} 
                        type="date" 
                        className="form-control"                                   
                        autoComplete="off" 
                        required={true}
                    />                                   
            </label>
            

            <label className="">
                 Hora: 
                    <input onChange={handleChange}
                        name="hour"
                        value={data.hour} 
                        type="time" 
                        className="form-control"                                   
                        autoComplete="off" 
                        required={true}
                    />                                   
            </label>

            
            <label className="">
                 Sintomas: 
                    <textarea onChange={handleChange}
                        name="symptom"
                        value={data.symptom} 
                        type="text" 
                        className="form-control"                                   
                        autoComplete="off" 
                        required={true}
                    />                                   
            </label>

            <div className="">
                    <button onClick={onSubmit}>Agregar cita</button>
            </div>

            </form>

        </div>
    )
}

export default FormAdd
