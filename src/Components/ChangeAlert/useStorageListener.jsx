import React from "react"

function useStorageListener(sincronizedTodos) {
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (change) =>{
            if (change.key === 'TODOS_V1') {
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
                sincronizedTodos()
                setStorageChange(false)
        }

        return {
            show:storageChange,
            toggleShow
        }
    
}

export {useStorageListener}