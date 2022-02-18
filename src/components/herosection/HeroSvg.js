import classes from './HeroSvg.module.css';
import {BiCookie, BiCake} from 'react-icons/bi';
import About from '../about/About';


function HeroSvg() {

    const svgStyles = {fontSize: '4rem', marginLeft: '5rem', marginRight: '5rem', marginTop: '2.5rem'};

return (
    <>
    <div className={classes.svg}>
        <div className = {classes['svg-img']}><BiCookie style={svgStyles}/><p className={classes.description}>Pies</p></div>
        <div className = {classes['svg-img']}><BiCake style={svgStyles}/><p className={classes.description}>Pies</p></div>
        <div className = {classes['svg-img']}><BiCake style={svgStyles}/><p className={classes.description}>Pies</p></div>
        <div className = {classes['svg-img']}><BiCake style={svgStyles}/><p className={classes.description}>Pies</p></div>
    </div>
    </>
)
}

export default HeroSvg;