import Cakes from './cakes/Cakes';
import MenuLinks from './MenuLinks';
import classes from './MenuText.module.css';

function MenuText() {
    return (
        <>
        <div className={classes.menu}>
          <div className={classes['menu-text']}>
    <div className={classes.hr}></div>
    <h4 className={classes.text}>see</h4>
    <h4 className={classes['our-menu']}>our menu</h4>
   </div>
   <MenuLinks />
   <Cakes />
   
   </div>
        </>
    )
}

export default MenuText;