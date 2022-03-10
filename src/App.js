// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/navbar/NavBar';
// import HeroSection from './components/herosection/HeroSection';
import HeroSectionBg from './components/herosection/HeroSectionBg';
import About from './components/about/About';
import Recipe from './components/recipe/Recipe';
import Menu from './components/menu/Menu';
import Testimonial from './components/testimonial/Testimonial';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import {useState} from 'react'

function App() {

const [cartIsShown, setCartIsShown] = useState(false); //initial state is false because that is cartIsShown face  

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}
//To render a component conditionally, simply add curly braces to the beginning with && and the end.
// to render cart if cartIsShown is truthy and not render if it is not   
return (
    <>
    {cartIsShown && <Cart onClose = {hideCartHandler} />}
    <HeroSectionBg onShowCart = {showCartHandler}/>
  <About />
  <Recipe />
  <Menu />
  <Testimonial />
  <Booking />
  <Footer />
</>
    );
}

export default App;
