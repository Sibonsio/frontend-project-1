import './Form.css'
import { useEffect, useState } from 'react'
import instance from '../config/axios.jsx'


const Form = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: '',
        employmentStatus: ''
    })
    const [data, setData] = useState({});
    const [isResponse, setResponse] = useState('');
    const [isMessage, setMessage] = useState(false);
    const handleChange = (e) => {
        const event = e.target
        const placeholder = event.placeholder
        const value = event.value
        if (placeholder === 'Firstname') {
            setFormData((prev) => {
                return {
                    firstname: value,
                    lastname: prev.lastname,
                    age: prev.age,
                    employmentStatus: prev.employmentStatus
                }
            })
        }
        else if (placeholder === 'Lastname') {
            setFormData((prev) => {
                return {
                    firstname: prev.firstname,
                    lastname: value,
                    age: prev.age,
                    employmentStatus: prev.employmentStatus
                }
            })
        }
        else if (placeholder === 'Age') {
            setFormData((prev) => {
                return {
                    firstname: prev.firstname,
                    lastname: prev.lastname,
                    age: value,
                    employmentStatus: prev.employmentStatus
                }
            })
        }
        else if (placeholder === 'Employment Status') {
            setFormData((prev) => {
                return {
                    firstname: prev.firstname,
                    lastname: prev.lastname,
                    age: prev.age,
                    employmentStatus: value
                }
            })
        }
        setMessage(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        storeData()
        setFormData({
            firstname: '',
            lastname: '',
            age: '',
            employmentStatus: ''
        })
        setMessage(true)

    }
    const storeData = async () => {
        try {
            const response = await instance.post('api/v1/signup', data)
            setResponse(response.data.message)
        } catch (error) {
            setResponse(error.response.data.message)
        }
    }
    useEffect(() => {
        setData(formData)
    }, [formData])
    return (
        <div className='form'>
            <form className='form-container' onSubmit={handleSubmit}>
                <label className='label'>Firstname</label>
                <input className='input' onChange={handleChange} value={formData.firstname} type="text" placeholder="Firstname" />
                <label className='label'>Lastname</label>
                <input className='input' onChange={handleChange} value={formData.lastname} type="text" placeholder="Lastname" />
                <label className='label'>Age</label>
                <input className='input' onChange={handleChange} value={formData.age} type="text" placeholder="Age" />
                <label className='label'>Employment Status</label>
                <input className='input' onChange={handleChange} value={formData.employmentStatus} type="text" placeholder="Employment Status" />
                <input className='submit' type="submit" placeholder="Submit" />
                {isMessage && <h1 className={`message ${isMessage && 'fade-out'} ${isResponse === 'Submission Error' ? 'red' : 'green'}`}>{isResponse}</h1>}
            </form>
        </div>
    )
}
export default Form