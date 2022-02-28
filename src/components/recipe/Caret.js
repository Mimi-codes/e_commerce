import classes from './Caret.module.css';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function Caret() {
 const caretStyle = {fontSize: '2rem', width: '4rem'}

return (
    <>
    <div className={classes.caret}>
    <div className={classes['caret-left']}><IoIosArrowBack style={caretStyle} /></div>
    <div className={classes['caret-right']}><IoIosArrowForward style={caretStyle} /></div>
</div>
</>
)
}

export default Caret;