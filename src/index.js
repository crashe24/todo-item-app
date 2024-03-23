import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const App = (props) => {
//     return (
//     <h1>Hola {props.saludo}, {props.nombre}</h1>

//     )
// }

// const withSaludo = (WrapperComponent) => {
//     return function WrapperComponentWithSaludo(saludo) {
//         return function ComponenteDeVerdad(props) {
//             return (<>
//                 <WrapperComponent {...props} saludo= {saludo}/>
//                 <p>Estamos acompaniando al wrapper</p>
//             </>)
//         }
        
//     }
// }

//const AppWithFunctionHOC = withSaludo(App)('Buenas')
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render( <AppWithFunctionHOC  nombre= 'jorge' />);
root.render( <App />);

