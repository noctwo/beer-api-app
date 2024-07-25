import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { IBeer } from "../../contracts/IBeer";
import { useParams } from "react-router-dom";

const BeerDetail = () => {

    const [beerDetailData, setBeerDetailData] = useState<IBeer | null>(null);

    const {id} = useParams<{id?:string}>()

    useEffect(() => {
        fetch(`https://api.sampleapis.com/beers/ale/${id}`)
        .then((response) => response.json())
        .then((data) => setBeerDetailData(data));
    }, [id])

    return (  
        <>
        <h2>BeerDetail</h2>
        <img src={beerDetailData?.image} onError={(e) => (e.currentTarget.src ="/img/fallback.webp")} />
        <p>{beerDetailData?.name}</p>
        <Footer />
        </>
    );
}

export default BeerDetail;