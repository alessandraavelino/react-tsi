import React from 'react'
import { useState } from 'react'

function Main() {
  const [cont, setCont] = useState(0)
  
  
function handleClick(){
  setCont(cont + 1)
  console.log(cont)
  
}

  return (
    
    
    <main>
      <h1>{cont}</h1>
      <button onClick={handleClick}>Enviar</button>
    </main>
  )
}

export default Main