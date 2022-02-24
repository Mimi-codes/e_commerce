import classes from './Caret.module.css';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';

function Caret() {
 const caretStyle = {fontSize: '2rem', width: '4rem'}

return (
    <>
    <div className={classes.caret}>
    <div className={classes['caret-left']}><AiFillCaretLeft style={caretStyle} /></div>
    <div className={classes['caret-right']}><AiFillCaretRight style={caretStyle} /></div>
</div>
</>
)
}

export default Caret;