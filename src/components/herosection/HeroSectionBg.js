import NavBar from '../navbar/NavBar';
import classes from './HeroSectionBg.module.css';
import HeroSectionContent from './HeroSectionContent';

function HeroSectionBg() {
return (
    <>
    <div className={classes['hero-bg']}>
        <NavBar />
        <HeroSectionContent />
    </div>
    </>
)
}

export default HeroSectionBg;