import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Início</Link>
                    </li>
                    <li>
                        <Link to="/param/01">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal!">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu;