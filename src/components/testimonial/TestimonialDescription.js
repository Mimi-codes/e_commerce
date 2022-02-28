import classes from './TestimonialDescription.module.css';
import TestimonialCardImage from './TestimonialCardImage';
import ProgressBar from './ProgressBar';

function TestimonialDescription() {
 return (
    <>
        <div className={classes['card-container']}>
    <div className={classes.card}>
<div className={classes.container}>
    <h4>'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    varietieslorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet' </h4>
    <TestimonialCardImage />
    </div>
    </div>
    <ProgressBar />
</div>
</>
)
}

export default TestimonialDescription;