import classes from './CakeImages.module.css';
import cakeLoaf from '../../../assets/cakeloaf.jpg';
import {AiFillStar} from 'react-icons/ai';
import MenuForm from '../MenuForm';


function CakeImages() {
return(
    <>
   <div className={classes['card-container']}>
        <div className={classes.card}>
    <img src={cakeLoaf} alt ='cake loaf'/>
    <div className={classes.container}>
        <p>$price</p>
        <p>cake loaf</p>
        <MenuForm />
         <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
    </div>
        </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>meatpie</p>
    <MenuForm />
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>donut</p>
    <MenuForm />
<p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>

<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>small chops</p>
    <MenuForm />
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>
    
    </div>   
    </>
)
}

export default CakeImages;