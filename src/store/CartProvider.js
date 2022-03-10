//the reason for this component is to manage the cart context data and
// to provide the context to all component that wants to use it. 

import CartContext from "./cart-context";
const addItemToCartHandler = item => {}


const removeItemFromCartHandler = id => {}

const  CartProvider = props => {


    //add a helper constant
const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler 
}
    

    return <CartContext.Provider value ={cartContext}>
        {props.children}
        </CartContext.Provider>
};

export default CartProvider;