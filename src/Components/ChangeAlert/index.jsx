import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

function ChangeAlert ({sincronizedTodos}) {
    const {show, toggleShow} = useStorageListener(sincronizedTodos)
    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Hubo cambios en otra ventana</p>
                    <p>Debes sincronizar?</p>
                    
                </div>
                <button 
                    className='TodoForm-button TodoForm-button--add'
                    onClick={() => toggleShow(false)}>Vover a Cargar</button>
            </div>
        )
    } else {
        return null
    }
}

export { ChangeAlert }