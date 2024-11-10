import './styles-components/Tarjetas.css';
import img from '../IMG/img.jpg';
import encriptador from '../IMG/encriptador.jpg';

const Header = () =>{
    return(
        <section className="tarjetas">
        <div className="container">
            <div className="row">
                <div className="tarjeta">
                    <div className="tarjeta__imagen">
                        <img src={encriptador} alt="Foto paisaje" />
                    </div>
                    <div className="tarjeta__contenido">
                        <h3>Encriptador/Desencriptador</h3>
                        <p>Aplicación que transforma texto legible en código cifrado para proteger la información y permite revertir el proceso para recuperar el contenido original. Preciona ver para probarlo.</p>
                        <a href="https://cris015.github.io/Challenge-Oracle-ONE-Encriptadora/">Ver</a>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="tarjeta__imagen">
                        <img src={img} alt="Foto paisaje" />
                    </div>
                    <div className="tarjeta__contenido">
                        <h3>Titulo</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, laborum enim labore reprehenderit alias sint.</p>
                        <a href="#">Ver</a>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="tarjeta__imagen">
                        <img src={img} alt="Foto paisaje" />
                    </div>
                    <div className="tarjeta__contenido">
                        <h3>Titulo</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, laborum enim labore reprehenderit alias sint.</p>
                        <a href="#">Ver</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Header;