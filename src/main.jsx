import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContadorRob from './Roberto/contador.jsx'
import GrupoRob from './Roberto/grupo.jsx'


const Pepe = (props) => <h1>{props.lala} buajajaja {props.ahre}</h1>;


ReactDOM.createRoot(document.getElementById('root')).render(
 <>
   <ContadorRob/>
   <GrupoRob/>
  </>
)
/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
