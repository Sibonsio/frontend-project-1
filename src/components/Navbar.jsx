import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>boo<span className='logo-part'>Keeping</span></span>
                <nav className='navItems'>
                    <ul className='nav-list-container'>
                        <li className='nav-list-items'><a className='nav-items' href='/form'>Form</a></li>
                        <li className='nav-list-items'><a className='nav-items' href='/all'>All</a></li>
                        <li className='nav-list-items'><a className='nav-items' href='/employed'>Employed</a></li>
                        <li className='nav-list-items'><a className='nav-items' href='/unemployed'>Unemployed</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar