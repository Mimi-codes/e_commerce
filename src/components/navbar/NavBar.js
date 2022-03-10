import classes from './NavBar.module.css';
import {BiCartAlt } from 'react-icons/bi';
import NavBarCartButton from '../cart/NavBarCartButton';

const NavBar = props => {
return (
    <>
    <div className={classes.nav}>
    <h2 className={classes.logo}>K & S Tastee Treats</h2>
    <ul className={classes['nav-bar']}>
        <li className={classes}><a href ='#about'>about</a></li>
        <li className={classes}><a href ='#menu'>menu</a></li>
        <li className={classes}><a href ='#reservation'>Reservation</a></li>
        <li className={classes}><a href ='#menu'>order</a></li>
        <li className={classes}><a href ='#contact'>contact</a></li>
        <li className={classes}><a href =''>my account</a></li>
        {/* <NavBarCartButton  onClick={props.onShowCart}/> */}
    </ul>
    </div>
    </>
) 
}

export default NavBar;