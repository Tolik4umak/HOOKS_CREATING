import React, { useState } from 'react'
import { useToggle } from '../../hooks/useToggle'

export default function Toggle() {

//   const [phrase, setPhrase] = useState(true)  
  const [show, toggle] = useToggle(true)  


  return (
    <div>
        <button onClick={toggle} > Button </button>
        {
            show ? <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p> : ''
        }
    </div>
  )
}
