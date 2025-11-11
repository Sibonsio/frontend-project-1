import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>booKeeping</span>
                <nav className='navItems'>
                    <ul>
                        <li className='nav-list-items'><a className='nav-items'>Form</a></li>
                        <li className='nav-list-items'><a className='nav-items'>All</a></li>
                        <li className='nav-list-items'><a className='nav-items'>Employed</a></li>
                        <li className='nav-list-items'><a className='nav-items'>Unemployed</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar