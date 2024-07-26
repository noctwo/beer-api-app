import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { IBeer } from "../../contracts/IBeer";
import { useParams } from "react-router-dom";
import { useBeer } from "../../context/fetch";
import "./BeerDetail.css"


const BeerDetail = () => {

    const [filteredBeer, setfilteredBeer] = useState<IBeer | null>(null);

    const {id} = useParams<{id?:string}>()

    const { beerData } = useBeer();

    useEffect(() => {
        if (beerData && id){
            const match = beerData.find((item) => item.id === Number(id))
            setfilteredBeer(match !== undefined ? match: null)
        } else{console.log(id, beerData)}
    }, [id, beerData])

    return (  
        <>
        <div className="detail-card">
        <div className="detail-img-container">
        <img src={filteredBeer?.image} onError={(e) => (e.currentTarget.src ="/img/fallback.webp")} />
        </div>
        <div className="detail-text-container">
        <h2>{filteredBeer?.name}</h2>
        <div className="beer-details">
        <p className="rating">{filteredBeer?.rating.average.toFixed(2)}</p>
        <p className="price">{filteredBeer?.price}</p>
        </div>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default BeerDetail;