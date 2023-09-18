import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainJ from './individuales/Jose/MainJ'
import MainA from './individuales/Alejandro/MainA'
import MainC from './individuales/Caro/MainC'
import MainR from './individuales/Roberto/MainR'
import MainF from './individuales/Fabian/MainF'


const App = () => {

  const mains = [<MainJ/>, <MainA/>, <MainC/>, <MainR/>, <MainF/>] ;
  
  const [indexM, cIndexM] = useState(0);

  const culo = ["culoooo", "pedo", "pis"]

  const Selector = () => {
    
    return(
      <select 
      value={indexM}
      onChange={(e)=> {cIndexM(e.target.value)}} name="" id="">

        <option value="0">Jose Becerra</option>
        <option value="1">Alejandro Martinez</option>
        <option value="2">Carolina Estefania Medina</option>
        <option value="3">Roberto Zitto</option>
        <option value="4">Fabian Badini</option>
      </select>
    )
  }

  const MandaMain = () => {
    
    return (
    <>
    {mains[indexM]}
    </>
    )

  }

  return (
    <>
    <Selector/>
    <MandaMain/>

    </>
  )
}

export default App
