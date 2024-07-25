import { Link } from "react-router-dom";
import { IBeer } from "../../contracts/IBeer";
import "./Card.css"

interface BeerItemProps{
    beer: IBeer;
}

const Card: React.FC<BeerItemProps> = (props) => {

    return ( 
        <Link to={`/beerdetail/${props.beer.id}`} >
        <div className="list-wrapper">
        <div className="card">
            <div className="card-img-container">
                <img src={props.beer.image}
                onError={(e) => (e.currentTarget.src ="/img/fallback.webp")}
                />
            </div>
            <div className="card-text-container">
            <h3>{props.beer.name}</h3>
            <p>{props.beer.rating.average.toFixed(2)}</p>
            <p>{props.beer.price}</p>
            </div>
            <button className="card-btn">see more
            </button>
        </div>
        </div>
        </Link>
    );
}

export default Card;