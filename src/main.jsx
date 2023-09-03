import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contador from './Roberto/contador.jsx'

const Pepe = (props) => <h1>{props.lala} buajajaja {props.ahre}</h1>;


ReactDOM.createRoot(document.getElementById('root')).render(
 <>
   <Contador/>
   <Pepe lala="LALAL" ahre="ahre"></Pepe>
   <Pepe lala="ooohh" ahre="viveeee"/>
   
 </>
)
/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
