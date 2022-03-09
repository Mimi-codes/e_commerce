import classes from './NavBarCartButton.module.css'
import {BiCartAlt } from 'react-icons/bi'


function NavBarCartButton () {
   

   return <>
      <button>
           <li className={classes}>
               <a href =''><BiCartAlt />
               <span className={classes.badge}>3</span>
               Cart</a>
               </li>
               </button>
    </>
}

export default NavBarCartButton;