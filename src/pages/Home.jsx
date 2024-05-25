import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa"; 

function Home() {
  const [info, setInfo] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/')
      .then(res => setInfo(res.data))
      .then(err => console.error(err));

    axios.get('http://localhost:3000/favorites/')
      .then(res => setFavorites(res.data))
      .then(err => console.error(err));
  }, []);

  const toggleFav = (id) => {
    const isFavorite = favorites.some(fav => fav.id === id);
    
    if (isFavorite) {
      axios.delete(`http://localhost:3000/favorites/${id}`)
        .then(() => {

          setFavorites(favorites.filter(fav => fav.id !== id));
        })
        .then(err => console.error(err));
    } else {
      axios.get(`http://localhost:3000/api/${id}`)
        .then(res => axios.post('http://localhost:3000/favorites/', res.data))
        .then(res => {

          setFavorites([...favorites, res.data]);
        })
        .then(err => console.error(err));
    }
  };

  return (
    <>
      {info.map(element => {
        const isFavorite = favorites.some(fav => fav.id === element.id);
        return (
          <div key={element.id} className='cardProduct'>
            <h1>{element.name}</h1>
            <h2>{element.price}</h2>
            <p>{element.year}</p>
            <button onClick={() => toggleFav(element.id)}>
              {isFavorite ? <FaHeart /> : <CiHeart />}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Home;
