import React, { useState, useEffect } from 'react'

function useEffectCleanup(){
    const [size, setSize] = useState(window.innerWidth)
    console.log(size)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=> {
            console.log('clean up');
            window.removeEventListener('clean',checkSize);
        }
    },[])
    return (
        <>
            <h2>UseEffect</h2>
            <h2>window size: {size} px</h2>
        </>
    )
}
export default useEffectCleanup