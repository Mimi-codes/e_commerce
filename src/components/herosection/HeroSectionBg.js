import NavBar from '../navbar/NavBar';
import classes from './HeroSectionBg.module.css';
import HeroSectionContent from './HeroSectionContent';
import HeroSvg from './HeroSvg';
import NavBarCartButton from "../cart/NavBarCartButton";

const HeroSectionBg = props => {
return (
    <>
    <div className={classes['hero-bg']}>
    <header className={classes.header}>
            <NavBar />
            <NavBarCartButton onClick = {props.onShowCart}/>
        </header>
        <HeroSectionContent />
        <HeroSvg />
    </div>
    </>
)
}

export default HeroSectionBg;