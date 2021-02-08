import React, {useState} from 'react'

function useStateBasics() {

    const [text,setText] = useState('random title')

    const handleClick = () => {
        if (text === 'random title') {
            setText('hello title');
        } else {
            setText('random title')
        }
    }
    return (
        <div>
            <h1>{text}</h1>
            <button type="button" className="btn" onClick={handleClick}>Change title</button>
        </div>
    )
}

export default useStateBasics