import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <h1>Beer API</h1>
        <section className="all-beers">
            <Link to="/beerlist">
            <div className="home-card">
            <div className="img-container">
            <img src="/img/list-beer.jpg" />
            <h2>All Beers</h2>
            </div>
            <div className="text-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur rerum necessitatibus impedit exercitationem animi aut obcaecati enim non dolorem.
            </p>
            </div>
            </div>
            </Link>
        </section>
        <section className="rnd-beer">
        <Link to="/randombeer">
        <div className="home-card">
        <div className="img-container">
            <img src="/img/rnd-beer.jpg"/>
            <h2>Random Beer</h2>
            </div>
            <div className="text-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur rerum necessitatibus impedit.
            </p>
            </div>
            </div>
            </Link>
        </section>
        </>
     );
}
 
export default Home;