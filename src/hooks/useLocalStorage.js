import { useState, useEffect } from "react"

const useLocalStorage = (itemName, initialValue) => {

  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sincronizedItem, setSincronizedItem] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      try {
          const localStorageItems = localStorage.getItem(itemName)
          let parserItems
          if (!localStorageItems) {
            parserItems = initialValue
            localStorage.setItem(itemName, JSON.stringify(parserItems))
          } else {
            parserItems = JSON.parse(localStorageItems)
          }
          setItems(parserItems)
          setLoading(false)
          setSincronizedItem(true)
        } catch (error) {
          setLoading(false)
          setError(true)
        }  
      }, 3000);
          
    }, [sincronizedItem]);

  // console.log('items', items)
  
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItems(newItems)
    }
  
    const sincronizeItem = () => {
      setLoading(true)
      setSincronizedItem(false)
    }
    return  { items, saveItem,loading, error,sincronizeItem }
  }

  export { useLocalStorage }