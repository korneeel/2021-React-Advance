import React, { useState } from 'react';
import { data } from './data';

const PropDrilling = () => {

    const [people,setPeople] = useState(data)
    console.log(data)
    
    const removePerson = (id) => {
        setPeople((people) =>{
            return people.filter((person) => person.id !== id)
        })
    }

    return (
        <section>
            <h3>Pop drilling</h3>
            <List people={people} removePerson={removePerson} />
        </section>
    )
}
const List = ({people, removePerson}) => {
    return (
        <>
            {
                people.map((person)=>{
                    return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
                })
            }
        </>
    )
}
const SinglePerson = ({ id, name , removePerson }) => {
    return ( 
            <div className="item">
                <h4>{name} - {id}</h4>
                <button onClick={()=>removePerson(id)}>X</button>
            </div>
    )
}
export default PropDrilling