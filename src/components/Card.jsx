import './Card.css'

const Card = ({ firstname, lastname, age, employmentStatus, id }) => {
    return (
        <section className='card-container'>
            <h2>Number: {id}</h2>
            <h2>First Name: {firstname}</h2>
            <h2>Last Name: {lastname}</h2>
            <h2>Age: {age}</h2>
            <h2>Employment Status: {employmentStatus}</h2>
        </section>
    )

}
export default Card