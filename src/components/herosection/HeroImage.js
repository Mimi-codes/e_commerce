import classes from './HeroImage.module.css';
import perfectSnack from '../../assets/choc-cake.png';

function HeroImage() {
return (
    <>
      <div className={classes.image}>
        <img src={perfectSnack} alt='hero img' />
        </div>
    </>
)
}

export default HeroImage;