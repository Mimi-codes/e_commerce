import classes from './TestimonialCardImage.module.css';
import cakeLoaf from '../../assets/forest-cake-removebg-preview.png';

function TestimonialCardImage() {
return (
    <div className={classes['testimonial-image']}>
    <img src={cakeLoaf} alt ='cake loaf'/>
    <div className={classes.description}>
    <p>Mariam Ismael</p>
    <p>Mariam Ismael</p>
    </div>
</div>
)
}

export default TestimonialCardImage;