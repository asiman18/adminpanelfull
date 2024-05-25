import React, { useState, useEffect } from 'react'
import CustomTabale from '../components/CustomTabale'
import CustomTableRow from '../components/CustomTableRow'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Admin() {
    const [info, setInfo] = useState([])
    const [deleteToggle, setDeleteToggle] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchBy, setSearchBy] = useState('name')
    const [change, setChange] = useState('ney')

    useEffect(() => {
        axios.get('http://localhost:3000/api/').then(res => setInfo(res.data))
    }, [deleteToggle])

    const filteredInfo = info.filter(element => {
        if (searchBy === 'year') {
            return element.year.toString().includes(searchTerm);
        } else {
            return element[searchBy].toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    const sortedInfo = filteredInfo.slice().sort((a, b) => {
        const aValue = a.price;
        const bValue = b.price;
        if (change === 'inc') {
            return aValue - bValue;
        } else if (change === 'dec') {
            return bValue - aValue;
        } else {
            return 0;
        }
    });

    return (
        <>
            <input
                type="text"
                placeholder="Axtaris edin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                <option value="name">Name</option>
                <option value="year">Year</option>
                <option value="price">Price</option>
            </select>
            <select value={change} onChange={(e)=>setChange(e.target.value)} style={{display: 'flex'}}>
                <option value="ney">Neytarl</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
            <CustomTabale>
                {sortedInfo.map(element => <CustomTableRow
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    year={element.year}
                    price={element.price}
                    trigger={deleteToggle}
                    setTrigger={setDeleteToggle} />)}
            </CustomTabale>

            <Link to='/add'> <button className='create'>Add new element</button> </Link>
        </>
    )
}

export default Admin
