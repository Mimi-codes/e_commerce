import classes from './AboutButton.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';


function AboutButton() {
    return (
        <>   
        <div className={classes['about-btn']}>
         <button className={classes.btn}>Discover Menu</button>
        <AiOutlineArrowRight  className={classes['arrow-icon']}/>
        </div>
        </>
    )
}

export default AboutButton;