import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BeerDetail from './pages/BeerDetail/BeerDetail'
import BeerList from './pages/BeerList/BeerList'
import Home from './pages/Home/Home'
import BeerRandom from './pages/BeerRandom/BeerRandom'
import { BeerProvider } from './context/fetch'


function App() {


  return (
    <BeerProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beerlist" element={<BeerList/>}/>
      <Route path="beerdetail/:id" element={<BeerDetail />} />
      <Route path="/randombeer" element={<BeerRandom/>}/>
      </Routes>
    </BrowserRouter>
    </BeerProvider>
  )
}

export default App
