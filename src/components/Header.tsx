import './styles-components/Header.css';
// import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Curriculum</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;