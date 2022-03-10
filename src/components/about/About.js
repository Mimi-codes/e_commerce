//import AboutImg from './AboutImg';
import classes from './About.module.css';
import AboutImg from './AboutImg';
import AboutText from './AboutText';

function About() {
return (
    <>
    <div className={classes['about-bg']} id='about'>
    <div className={classes.about}>
<AboutImg />
<AboutText />
    </div>
    </div>
    </>
)
}

export default About;