import React, { useState } from 'react'
import { data } from './data'
import { Link } from 'react-router-dom'

const People = () => {
    const [people, setPeople] = useState(data)
    return (
        <div>
            <h1>People page</h1>
            {people.map((person)=> {
                return (
                    <div className="item" key={person.id}>
                        <h3>{person.name}</h3>
                        <Link to={`/person/${person.id}`}>Learn more...</Link>
                    </div>
                )
            })}
        </div>
    )
}
export default People