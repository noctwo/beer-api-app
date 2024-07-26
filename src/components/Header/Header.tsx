import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <Link to="/"><img src="/img/logo.svg" /></Link>
                    <h1>Beer API App</h1>
        </header>
     );
}
 
export default Header;