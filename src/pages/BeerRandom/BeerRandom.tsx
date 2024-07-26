import Footer from "../../components/Footer/Footer";
import { useBeer } from "../../context/fetch";
import "./BeerRandom.css"


const BeerRandom = () => {

    const { beerData } = useBeer();
    let rndBeerId = Math.floor(Math.random() * beerData?.length!)
    const rndBeer = beerData![rndBeerId]
    
    return (
    <>
    <div className="detail-card">
        <div className="detail-img-container">
        <img src={rndBeer?.image} onError={(e) => (e.currentTarget.src ="/img/fallback.webp")} />
        </div>
        <div className="detail-text-container">
        <h2>{rndBeer?.name}</h2>
        <div className="beer-details">
        <p className="rating">{rndBeer?.rating.average.toFixed(2)}</p>
        <p className="price">{rndBeer?.price}</p>
        </div>
        </div>
        </div>
    <Footer />
    </>
    );
};

export default BeerRandom;