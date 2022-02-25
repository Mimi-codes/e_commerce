import classes from './CakeImages.module.css';
import cakeLoaf from '../../../assets/cakeloaf.jpg';
import {AiFillStar} from 'react-icons/ai';


function CakeImages() {
return(
    <>
   <div className={classes['card-container']}>
        <div className={classes.card}>
    <img src={cakeLoaf} alt ='cake loaf'/>
    <div className={classes.container}>
        <p>$price</p>
        <p>cake loaf</p>
        <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
    </div>
        </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>meatpie</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>donut</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>small chops</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>
    
    </div>   
    </>
)
}

export default CakeImages;