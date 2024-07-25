import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useBeer } from "../../context/fetch";


const BeerList = () => {

    const { beerData } = useBeer();

    return ( 
        <>
        <div className="list-wrapper">
        {beerData?.map((item, index) => (
            <Card beer={item} key={index}/>
        ))}
        </div>
        <Footer />
        </>
    );
}

export default BeerList;