import classes from './MenuLinks.module.css';


function MenuLinks() {
    return (
        <div className={classes.menu}>
    <ul className={classes['menu-links']}>
        <li className={classes}><a href =''>cakes</a></li>
        <li className={classes}><a href =''>cookies</a></li>
        <li className={classes}><a href =''>pies</a></li>
        <li className={classes}><a href =''>doughnuts</a></li>
        <li className={classes}><a href =''>chin-chin</a></li>
        <li className={classes}><a href ='./drinks/Drinks'>drinks</a></li>
    </ul>
    </div>
        )
}

export default MenuLinks;