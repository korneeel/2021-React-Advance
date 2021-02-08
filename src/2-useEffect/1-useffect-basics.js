import React, {useState, useEffect} from 'react'

function useEffectBasics() {
    const [value,setValue] = useState(0);
    
    useEffect(()=>{
        if (value >= 1){
            document.title = `New message(${value})`
        }
        console.log('call useEffect')
    },[value])
    console.log('render component')
    return (
        <div>
            <h3>UseEffect basics</h3>
            <h2>{value}</h2>
            <button className="btn" onClick={()=>setValue(value+1)}>+</button>
        </div>
    )
}

export default useEffectBasics
