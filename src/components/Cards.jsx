import './Cards.css'
import Card from './Card.jsx'
import instance from '../config/axios.jsx'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const Cards = () => {
    const location = useLocation();
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            if (location.pathname === '/all') {
                const response = await instance.get('/')
                setData(response.data.data.getData)
            } else if (location.pathname === '/employed') {
                const response = await instance.get('/employed')
                setData(response.data.data.employedData)
            } else if (location.pathname === '/unemployed') {
                const response = await instance.get('/unemployed')
                setData(response.data.data.unemployedData)
            }

        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [data])
    const showCards = data.map((data) => {
        return <Card key={data._id} firstname={data.firstname} lastname={data.lastname} age={data.age} employmentStatus={data.employmentStatus} />
    })
    return (
        <main className='cards'>
            {showCards}
        </main>
    )
}
export default Cards