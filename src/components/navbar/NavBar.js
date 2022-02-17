import classes from './NavBar.module.css';

function NavBar() {
return (
    <>
    <div className={classes.nav}>
    <h2 className={classes.logo}>Brand Name</h2>
    <ul>
        <li className={classes}><a href =''>about</a></li>
        <li className={classes}><a href =''>menu</a></li>
        <li className={classes}><a href =''>Reservation</a></li>
        <li className={classes}><a href =''>order</a></li>
        <li className={classes}><a href =''>contact</a></li>
        <li className={classes}><a href =''>my account</a></li>
        <li className={classes}><a href =''>cart</a></li>
    </ul>
    </div>
    </>
)
}

export default NavBar;