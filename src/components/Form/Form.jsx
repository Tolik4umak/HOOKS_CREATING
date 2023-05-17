import React, { useState } from 'react'
import s from './style.module.css'
import { useInput } from '../../hooks/useInput'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function Form() {

//   const [uName , setUName] = useState('') 

//   const onChangeHandler = (e) => {
//     setUName(e.target.value)
//   }

  const userName = useInput('')
  const userLastName = useInput('')
  const userAge = useInput('')
  const userSpecialization = useInput('')


  const [local , setValue] = useLocalStorage('', 'myLocal')

  console.log(local)

  return (
    <div className={s.container} >
        <input {...userName} type="text" placeholder='name'/>
        <input {...userLastName} type="text" placeholder='last-name' />
        <input {...userAge} type="text" placeholder='age' />
        <input {...userSpecialization}type="text" placeholder='specialization' />
        <button onClick={() => {
            setValue({
                userName: userName.value,
                userLastName: userLastName.value,
                userAge: userAge.value,
                userSpecialization: userSpecialization.value,
            })

            userName.clear()
            userLastName.clear()
            userAge.clear()
            userSpecialization.clear()
        }}>show data</button>
    </div>
  )
}
