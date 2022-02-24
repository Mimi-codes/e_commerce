import Caret from './Caret';
import classes from './RecipeText.module.css';

function RecipeText() {
return (
    <div className={classes.explore}>
          <div className={classes['recipe-text']}>
    <div className={classes.hr}></div>
    <h4 className={classes.text}>explore</h4>
    <h4 className={classes['recipe-explore']}>hot selling recipe</h4>
    <p className={classes['recipe-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p>
</div>
<Caret />
    </div>
)
}

export default RecipeText;