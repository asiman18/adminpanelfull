import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Favorites() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/favorites/')
            .then(res => setInfo(res.data))
            .then(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/favorites/${id}`)
            .then(res => {
                setInfo(info.filter(element => element.id !== id));
            })
            .then(err => console.error(err));
    };

    return (
        <>
            {info.map(element => (
                <div key={element.id} className='cardProduct'>
                    <h1>{element.name}</h1>
                    <h2>{element.price}</h2>
                    <p>{element.year}</p>
                    <button onClick={() => handleDelete(element.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default Favorites;

