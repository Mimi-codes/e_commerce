import classes from './NavBarCartButton.module.css'
import {BiCartAlt } from 'react-icons/bi'
import {useContext} from 'react';
import CartContext from '../../store/cart-context';


const NavBarCartButton = props => {
  const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
}, 0); //reduce is to transform an array into a single value

   return <>
     <button className={classes.btn} onClick={props.onClick}>
    <span className= {classes.icon}>
        <BiCartAlt />
     </span>
    <span className={classes.text}>Cart</span>
    <span className={classes.badge}>
 {numberOfCartItems}
    </span>
</button>



    </>
}

export default NavBarCartButton;