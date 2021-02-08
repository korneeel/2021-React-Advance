import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

function useEffectFatchData() {
    const [users,setUsers] = useState([])

    const getUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
        console.log(users)
    }
    
    useEffect(()=>{
        getUser();
    },[])

    return (
        <>
            <h2>Fetch data</h2>
            <ul>
                { users.map((user)=>{
                    const {id, login, avatar_url, html_url } = user
                    return <li key={id}>
                        <img src={avatar_url} alt={login}></img>
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default useEffectFatchData
