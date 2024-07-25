import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { IBeer } from "../contracts/IBeer";


interface BeerContextProps {
    beerData: IBeer[] | undefined;
    setBeerData: React.Dispatch<React.SetStateAction<IBeer[] | undefined>>;
}


const BeerContext = createContext<BeerContextProps | undefined>(undefined);

export const useBeer = () => {
  const context = useContext(BeerContext);
  if (!context) {
    throw new Error("useBeer must be used within a BeerProvider");
  }
  return context;
};


interface BeerProviderProps {
    children: ReactNode;
  }
  
  export const BeerProvider: React.FC<BeerProviderProps> = ({ children }) => {
    const [beerData, setBeerData] = useState<IBeer[]>();
  
    useEffect(() => {
      fetch("https://api.sampleapis.com/beers/ale")
        .then((response) => response.json())
        .then((data) => setBeerData(data));
    }, []);
  
    return (
      <BeerContext.Provider value={{ beerData, setBeerData }}>
        {children}
      </BeerContext.Provider>
    );
  };
