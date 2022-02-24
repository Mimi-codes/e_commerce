import classes from './HeroButton.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

const HeroButton = (props) => {
    return (
    <>   
    <div className={classes['hero-button']}>
     <button className={classes.btn}>Discover Menu</button>
    <AiOutlineArrowRight  className={classes['arrow-icon']}/>
    </div>
    </>
)
}

export default HeroButton;