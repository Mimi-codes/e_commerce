import classes from './TestimonialText.module.css';
// import TestimonialCard from './TestimonialCard';
import cakeLoaf from '../../assets/forest-cake-removebg-preview.png';
import TestimonialCaret from './TestimonialCaret';


function TestimonialText() {
return (
  <>
    <div className={classes['testimonial-section']}>
   <div className={classes.testimonial}>
    <div className={classes.customers}>
    <div className={classes.hr}><h4>TESTIMONIAL</h4> </div>
    <h2 className={classes.hear}>hear from our customers</h2>
    <p className={classes['hear-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p> 
    <img src={cakeLoaf} alt ='cake loaf'/>
 
    </div>
    <TestimonialCaret />
  </div>
  </div>

  </>
)
}

export default TestimonialText;