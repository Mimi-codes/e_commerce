import classes from './AboutText.module.css'
import AboutButton from './AboutButton';

function AboutText() {

return (
    <>
    <div className={classes['about-all']}>
    <div className={classes['about-text']}>
    <div className={classes.hr}></div>
    <h4 className={classes.text}>welcome</h4>
    <h4 className={classes['about-brand']}>about<br></br> k & s tastee treats</h4>
    <p className={classes['about-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p>
</div>
<AboutButton />
    </div>
    </>
)
}

export default AboutText;