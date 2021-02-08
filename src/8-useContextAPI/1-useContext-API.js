import React, { useState, useContext } from 'react';
import { data } from './data'

const PersonContext = React.createContext();
//two components - Provider, Consumer

const ContextAPI = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people)=>{
            return people.filter((person) => person.id !== id );
        });
    }
    return (
        //{{}} -> object/function 
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>useContext API / Context API</h3>
            <List />
        </PersonContext.Provider>
    )
}

const List = () => {

    const { people } = useContext(PersonContext);

    return (
        <>
            {
                people.map((person)=>{
                    return (
                        <SinglePerson
                            key={person.id}
                            {...person}
                        />
                    )
                })
            }
        </>
    )
}

const SinglePerson = ({ id, name }) => {

    const { removePerson } = useContext(PersonContext);

    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={()=> removePerson(id)}>X</button>
        </div>
    )
}

export default ContextAPI;