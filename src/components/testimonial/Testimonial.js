import TestimonialText from "./TestimonialText";
import classes from './Testimonial.module.css'
import TestimonialDescription from "./TestimonialDescription";
import ProgressBar from "./ProgressBar";

function Testimonial() {
    return (
      <>
      <div className={classes['testimonial-body']}>\
<TestimonialText />
<TestimonialDescription />
</div>
<ProgressBar />
      </>
    )
    }
    
    export default Testimonial;