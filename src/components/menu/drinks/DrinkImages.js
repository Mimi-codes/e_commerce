import classes from './DrinkImages.module.css';
import cakeLoaf from '../../../assets/cakeloaf.jpg';
import {AiFillStar} from 'react-icons/ai';


function DrinkImages() {
return(
    <>
   <div className={classes['card-container']}>
        <div className={classes.card}>
    <img src={cakeLoaf} alt ='cake loaf'/>
    <div className={classes.container}>
        <p>$price</p>
        <p>Kunun Zaki</p>
        <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
    </div>
        </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>Kunun Aya</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>Kunun Jeda</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>Zobo</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>
    
    </div>   
    </>
)
}

export default DrinkImages;