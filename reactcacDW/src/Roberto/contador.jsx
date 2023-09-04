/*im76767676767676y
nani?
*/
  




/*
hola

yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy47
  

meeee? esta la mushi en el teclado? XD



}}}}}}5rtttttttttttttttttttttttttttttttttttttttttttttttttttt5rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt

dejado aqui como registro historico pero tengo que seguir con esto
*/
import React, {useState, useEffect} from 'react';

const Contador = () => {

  const [nro, cambiarnro] = useState(0);
  const [va, cambiarva] = useState(2);
  let conte = 0;
  let contf = 0;
  
  const handleUp = () => {
    for (let index = 0; index < va; index++) {
      console.log(contf++);
      cambiarnro((nro) => nro + 1)  
      cambiarva((va) => va < 100? va+1 : 0)
      //cambiarnro((nro) => nro + 1)
    }
    
  };
    
  const handleDown = () => {
    cambiarnro(nro - 1)
  }
  
  const handleDownVA = () => {
    cambiarva(va-1)
  }
  const handleUpVA = () => {cambiarva(va+1)}
  
  
  useEffect(()=> {
    conte++;
    console.log(`cont: ${conte} \n NRO= ${nro} \n va=${va}`)}, [nro]);
  useEffect(()=> {
    conte++;
    console.log(`cont: ${conte} \n nro= ${nro} \n VA=${va}`)}, [va]);
  
  return (  
    <>
    <button onClick={handleUp}>+</button>  <button onClick={handleDown}>-</button>
    <h1>{nro}</h1>
    
    <button onClick={handleUpVA}>+</button>  <button onClick={handleDownVA}>-</button>
    <h1>{va}</h1>
    
    </>
  );
}

export default Contador