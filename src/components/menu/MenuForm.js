import Input from '../ui/Input';
import classes from './MenuForm.module.css';

const MenuForm = props => {
    return (
    <form className={classes.form} >
    <Input 
        input= {{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>Add +</button>
    {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
</form>
    )
}

export default MenuForm;