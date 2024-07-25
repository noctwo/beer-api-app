import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useBeer } from "../../context/fetch";


const BeerList = () => {

    const { beerData } = useBeer();

    return ( 
        <>
        <h2>BeerList</h2>
        {beerData?.map((item, index) => (
            <Card beer={item} key={index}/>
        ))}
        <Footer />
        </>
    );
}

export default BeerList;