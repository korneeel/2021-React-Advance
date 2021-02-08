import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

const ShortCircuit = () => {

    const [text,setText] = useState('');
    const firstValue = text || 'hello world';
    const secondValue  = text && 'hello word';
    console.log(secondValue)

    return (
        <>
            <h1>{text || 'john doe'}</h1>
            <Button variant="primary">Toggle Error</Button>
            {text && <h1>hello word</h1>}
            {!text && <h1>hello word</h1>}
            <Button variant="primary">Primary</Button>
        </>
    )
}
export default ShortCircuit