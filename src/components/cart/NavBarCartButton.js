import classes from './NavBarCartButton.module.css'
import {BiCartAlt } from 'react-icons/bi'


const NavBarCartButton = props => {
   

   return <>
      {/* <button onClick={props.onClick}> */}
           {/* <li className={classes}> */}
               {/* <a href =''><BiCartAlt /> */}
               {/* <span className={classes.badge}>3</span> */}
               {/* Cart</a> */}
               {/* </li> */}
               {/* </button> */}

     <button className={classes.btn} onClick={props.onClick}>
    <span className= {classes.icon}>
        <BiCartAlt />
     </span>
    <span className={classes.text}>Cart</span>
    <span className={classes.badge}>
 3
    </span>
</button>



    </>
}

export default NavBarCartButton;