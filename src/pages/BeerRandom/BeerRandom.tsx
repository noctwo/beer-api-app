import Footer from "../../components/Footer/Footer";
import { useBeer } from "../../context/fetch";



const BeerRandom = () => {

    const { beerData } = useBeer();
    let rndBeerId = Math.floor(Math.random() * beerData?.length!)
    const rndBeer = beerData![rndBeerId]
    
    return (
    <>
    <h2>BeerDetail</h2>
    <img src={rndBeer?.image} onError={(e) => (e.currentTarget.src ="/img/fallback.webp")} />
    <p>{rndBeer?.name}</p>
    <Footer />
    </>
    );
};

export default BeerRandom;