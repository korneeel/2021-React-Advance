import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

const ShortCircuit2 = () => {

    const [text,setText] = useState('');
    const [isError,setIsError] = useState(false)

    return (
        <>
            <h1>{text || 'john doe'}</h1>
            <Button onClick={()=>setIsError(!isError)}>Toggle Error</Button>
            {
                isError && <h1>Error...</h1>
            }
            {isError ? (
                <p>true ternary</p> 
            ) : (
                <p>false ternary operator work</p>
            )}
        </>
    )
}
export default ShortCircuit2