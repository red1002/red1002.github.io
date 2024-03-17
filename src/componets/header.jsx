import "./header.css"

const Header = () => {
    return (
        <header className='header'>
            <img src="/codificacion.png" className="logo"/>
            <nav className="nav">
                <ul>
                    <li className="nav-option"><a href="#">inicio</a></li>
                    <li className="nav-option"><a href="#">proyectos</a></li>
                    <li className="nav-option"><a href="#">acerca de mi</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header