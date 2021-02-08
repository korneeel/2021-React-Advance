import React, {useState} from 'react'

function useStateCounter() {
    const [count,setCount] = useState(0)
    const [value,setValue] = useState(0)

    const increaseHandle = () => {
        setCount(count + 1)
    }
    const decreaseHandle = () => {
        setCount(count - 1)
    }
    const complexIncrease = () => {
        setTimeout(()=> {
            setValue( value + 1);
        }, 2000);
    }
    
    console.log(count)
    console.log(value)

    return (
        <div>
            <section>
                <h1>Regular Counter</h1>
                <button type="button" className="btn" onClick={increaseHandle}>+</button>
                <h2>{count}</h2>
                <button type="button" className="btn" onClick={decreaseHandle}>-</button>
                <button type="button" className="btn-reset" onClick={()=>setCount(0)}>Reset</button>
            </section>
            <section>
                <h1>Complex Counter</h1>
                <h2>{value}</h2>
                <button type="button" className="btn" onClick={complexIncrease}>Increase later</button>
            </section>
        </div>
        
    )
}

export default useStateCounter
