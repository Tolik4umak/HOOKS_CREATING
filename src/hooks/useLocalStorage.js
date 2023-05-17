import { useEffect, useState } from "react"

// export function useLocalStorage(initialValue, key){

//     const getData = JSON.parse(localStorage.getItem(key))  ?? initialValue

//     const [value, setValue] = useState(getData)

//     const writeToStorage = (val) =>  setValue(val)
//     localStorage.setItem(key, JSON.stringify(value))


//     return [value, writeToStorage]
// }



export function useLocalStorage(initialValue, key){

    const getData = JSON.parse(localStorage.getItem(key))  ?? initialValue
    const [value, setValue] = useState(getData)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value])


    return [value, setValue]
}