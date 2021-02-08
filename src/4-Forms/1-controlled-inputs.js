import React, { useState } from 'react';

const ContolledInputs = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people,setPeople] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (firstName && email) {
            const person = {id: new Date().getTime().toString(),firstName:firstName,email:email}
            setPeople((people)=>{
                return [...people, person]
            })
            setFirstName('');
            setEmail('');
            console.log(person)
            // console.log('firstname:',firstName,'email:',email);
        } else {
            console.log('empty array')
        }
    }

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            value={firstName} 
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input 
                            type="text"
                            id="email"
                            name="email" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>add person</button>
                </form>
                {
                    people.map((person)=>{
                        const {id,firstName,email} = person
                        return <div key={id}>
                            <h1>id: {id} first name: {firstName} email: {email}</h1>
                        </div>
                    })
                }
            </article>
        </>
    )
};

export default ContolledInputs;