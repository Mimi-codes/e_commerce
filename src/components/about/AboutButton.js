import classes from './AboutButton.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';


function AboutButton() {
    return (
        <>   
        <div className={classes['about-btn']}>
             
     <button className={classes.btn}><a href='#menu'>Discover Menu</a></button>
     <a href='#menu'><AiOutlineArrowRight  className={classes['arrow-icon']}/></a>
             </div>
        </>
    )
}

export default AboutButton;