import React, { useState } from 'react'

function useStateObject() {
    const [person,setPerson] = useState({
        name:'peter',
        age: 24, 
        message: 'random message'
    })
    console.log(person)

    const changeMessage = () => {
        setPerson({...person, message: 'new message'})
    }
    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>Change message</button>
        </div>
    )
}

export default useStateObject
