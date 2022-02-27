import classes from './BookingButton.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';


function BookingButton() {
    return (
        <>   
        <div className={classes['about-btn']}>
         <button className={classes.btn}>check availability</button>
        <AiOutlineArrowRight  className={classes['arrow-icon']}/>
        </div>
        </>
    )
}

export default BookingButton;