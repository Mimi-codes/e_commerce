import classes from './Cakes.module.css';
import CakeImages from './CakesImages';


function Cakes() {
return(
    <>
    <CakeImages />
    <CakeImages className={classes.cakes}/>
    
    </>
)
}

export default Cakes;