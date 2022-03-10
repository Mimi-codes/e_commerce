import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}


const ModalOverlay = props => {
    return <>
    <div className={classes.modal} />
    
 <div className={classes.backdrop}>{props.children}</div>
 </>
}


//import react portal from react-dom
//pass the component to it (.i.e as what to portal) 
// and also where to portal (i.e the div with id overlays in the index html file) which is passed into the helper element

const portalElement = document.getElementById('overlays'); //create a helper element



const Modal = props => {
return <>
{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
{ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
</>

}

export default Modal;