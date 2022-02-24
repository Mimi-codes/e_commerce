import classes from './AboutImg.module.css';
import perfectSnack from '../../assets/forest-cake-removebg-preview.png';

function AboutImg() {
    return (
        <div className={classes.image}>
        <img src={perfectSnack} alt='hero img' />
        </div>
    )
}

export default AboutImg;
