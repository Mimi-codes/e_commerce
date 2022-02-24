import classes from './RecipeImages.module.css';
import recipeImage1 from '../../assets/cakeloaf.jpg';
import recipeImage2 from '../../assets/cakeroll2.jpg';
import recipeImage3 from '../../assets/glazed doughnut.jpg';
import recipeImage4 from '../../assets/chin-chin-long.jpg';
import recipeImage5 from '../../assets/meatpie2.jpg';
import recipeImage6 from '../../assets/bb-small-chops-1.jpg';
import recipeImage7 from '../../assets/zobo.jpg';
import recipeImage8 from '../../assets/kunun.jpg';

function RecipeImages() {
    return (
        <>
        <div className={classes['recipe-images']}>
            <img src={recipeImage1} alt='cake-loaf'></img>
            <img src={recipeImage2} alt='cake-loaf'></img>
            <img src={recipeImage3} alt='cake-loaf'></img>
            <img src={recipeImage4} alt='cake-loaf'></img>
            </div>

<div className={classes['recipe-images2']}>
            <img src={recipeImage5} alt='cake-loaf'></img>
            <img src={recipeImage6} alt='cake-loaf'></img>
            <img src={recipeImage7} alt='cake-loaf'></img>
            <img src={recipeImage8} alt='cake-loaf'></img>
        </div>
        </>
    )
}

export default RecipeImages;