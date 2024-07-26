import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return ( 
        <>
        <section className="all-beers">
            <div className="home-card">
            <Link to="/beerlist">
            <div className="img-container">
            <img src="/img/list-beer.jpg" />
            </div>
            <div className="text-container">
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur rerum necessitatibus impedit exercitationem animi aut obcaecati enim non dolorem.
            </p>
            </div>
            </Link>
            </div>
        </section>
        <section className="rnd-beer">
        <div className="home-card">
        <Link to="/randombeer">
        <div className="img-container">
            <img src="/img/rnd-beer.jpg"/>
            </div>
            <div className="text-container">
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur rerum necessitatibus impedit.
            </p>
            </div>
            </Link>
            </div>
        </section>
        </>
     );
}
 
export default Home;