import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
            <nav>
                <Link to="/"><img src="/img/logo.svg" /></Link>
            </nav>
        </footer>
    );
}

export default Footer;