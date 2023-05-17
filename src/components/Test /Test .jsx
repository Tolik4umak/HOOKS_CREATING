import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function Test () {
    const [val, setVal] = useLocalStorage('', 'input_Local')

    const onSubmit = (e) => {
        e.preventDefault()
        const word = e.target.name.value
        setVal(pre => [...pre, word])
        e.target.reset()
    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name='name'/>
            <button>send</button>
        </form>

        <p>{
           val ? val.map(word => <p key={word}>{word}</p>) : ''
        }</p>
       
    </div>
  )
}
