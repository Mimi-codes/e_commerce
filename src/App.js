import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import HeroSection from './components/herosection/HeroSection';
import HeroSectionBg from './components/herosection/HeroSectionBg';
import About from './components/about/About';
import Recipe from './components/recipe/Recipe';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
   <HeroSection/>
  <About />
  <Recipe />
  <Menu />
</>
    );
}

export default App;
