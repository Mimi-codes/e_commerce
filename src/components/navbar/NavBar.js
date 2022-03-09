import classes from './NavBar.module.css';
import {BiCartAlt } from 'react-icons/bi';
import NavBarCartButton from '../cart/NavBarCartButton';

function NavBar() {
return (
    <>
    <div className={classes.nav}>
    <h2 className={classes.logo}>K & S Tastee Treats</h2>
    <ul className={classes['nav-bar']}>
        <li className={classes}><a href =''>about</a></li>
        <li className={classes}><a href =''>menu</a></li>
        <li className={classes}><a href =''>Reservation</a></li>
        <li className={classes}><a href =''>order</a></li>
        <li className={classes}><a href =''>contact</a></li>
        <li className={classes}><a href =''>my account</a></li>
        <li className={classes}><a href =''><NavBarCartButton /></a></li>
    </ul>
    </div>
    </>
)
}

export default NavBar;