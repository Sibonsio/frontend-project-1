import './Footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <footer className='footer-container'>
                <h2>{`${new Date().getFullYear()} Copyright`}</h2>
                <h2>Created by Codehatch</h2>
            </footer>
        </div>
    )
}
export default Footer