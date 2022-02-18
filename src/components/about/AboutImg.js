import classes from './AboutImg.module.css';
import perfectSnack from '../../assets/svg/choc.png';

function AboutImg() {
    return (
        <div className={classes.image}>
        <img src={perfectSnack} alt='hero img' />
        </div>
    )
}

export default AboutImg;
