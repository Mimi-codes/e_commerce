import NavBar from '../navbar/NavBar';
import classes from './HeroSectionBg.module.css';
import HeroSectionContent from './HeroSectionContent';
import HeroSvg from './HeroSvg';

function HeroSectionBg() {
return (
    <>
    <div className={classes['hero-bg']}>
        <NavBar />
        <HeroSectionContent />
        <HeroSvg />
    </div>
    </>
)
}

export default HeroSectionBg;