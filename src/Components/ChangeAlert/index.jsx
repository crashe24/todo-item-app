import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

function ChangeAlert ({show, toggleShow}) {
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

const ChangeAlertStorageListener = withStorageListener(ChangeAlert)
export { ChangeAlertStorageListener }