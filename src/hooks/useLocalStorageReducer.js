import {  useEffect, useReducer } from "react"

const useLocalStorageReducer = (itemName, initialValue) => {

  const [state, dispatch] = useReducer(reducer,initialState({initialValue}))
  const {
    items,
    loading,
    error,
    sincronizedItem,
  } = state

  const onError = () => dispatch({type: actionTypes.error})
  
  const onSuccess = (items) => {
     dispatch({
    type:actionTypes.success,
    payload: items
  })}
  
  const onSave = (item) => dispatch({
    type:actionTypes.save,
    payload: item
  })
  const onSincronize = () => dispatch({
    type:actionTypes.sincronize
  })

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
          onSuccess(parserItems)
        } catch (error) {
          onError()
        }  
      }, 3000);
          
    }, [sincronizedItem]);

  // console.log('items', items)
  
    const saveItem = (newItems) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        onSave(newItems)
        
      } catch (error) {
        onError()
      }
    }
  
    const sincronizeItem = () => {
      onSincronize()
    }
    return  { items, saveItem,loading, error,sincronizeItem }
  }

  const initialState = ({initialValue}) => ({
    sincronizedItem: true,
    error: false,
    loading:true,
    items: initialValue,
  })

  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'
  }
  const reducerObject = (state,payload) => ({
    [actionTypes.error]: {...state, error: true},
    [actionTypes.success]: {...state, sincronizedItem: true,error:false, loading:false, items: payload},
    [actionTypes.save]: {...state, items: payload},
    [actionTypes.sincronize]: {...state, sincronizedItem: false, loading:true},
  })


  const reducer = (state, action) =>{
   return  reducerObject(state, action.payload)[action.type] || state
  }

  
 
  
  export { useLocalStorageReducer }