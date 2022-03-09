
import Modal from '../ui/Modal';
import classes from './Cart.module.css';


const Cart = props => {


    const cartItems = <ul className={classes['cart-items']}>
        {[
            {id: 'c1', mame: 'Cupcake', amount: 2, price: 12.99},
        ].map((item) => <li>{item.name}</li>)}
    </ul>

    return <>
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span className={classes.price}>35.62</span>
            </div>
        <div className={classes.actions}>
<button className={classes['button--alt']}>Close</button>
<button className={classes['button--order']}>Order</button>
        </div>
    </Modal>
    </>
}

export default Cart;