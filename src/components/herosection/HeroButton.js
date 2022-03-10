import classes from './HeroButton.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

const HeroButton = (props) => {
    return (
    <>   
    <div className={classes['hero-button']}>
     <button className={classes.btn}><a href='#menu'>Discover Menu</a></button>
     <a href='#menu'><AiOutlineArrowRight  className={classes['arrow-icon']}/></a>
    </div>
    </>
)
}

export default HeroButton;