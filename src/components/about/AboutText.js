import classes from './AboutText.module.css'
import {HiOutlineMinus } from 'react-icons/hi';

function AboutText() {
    const svgStyles = {fontSize: '3rem'};

return (
    <>
      <div className={classes.perfect}>   
 <div className={classes.hr}><h4>WELCOME</h4> </div>
    <h2 className={classes['main-discover']}>About Brand Name</h2>
    <p className={classes['main-discover-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p>
    {/* <HeroButton>props.children</HeroButton> */}
    </div>
    </>
)
}

export default AboutText;