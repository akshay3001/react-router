import React, { useState, useEffect } from 'react';

function User() {
    // useState hook to store user info
    const [user, setUser] = useState([]);

    // Fetch user data from jsonplaceholder API


    // useEffect hook to fetch user info
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUser(data)
            });

            return () => {
                console.log('Destryoing User Componenet')
            }
    },[]);

    return (
        <div>
            <ul>
                {user.map(item => <li key={item.id}> {item.name} </li>)}
            </ul>
        </div>
    )
}

export default User
