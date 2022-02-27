
import classes from './Newsletter.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai';

function Newsletter() {

const setStyle = {fontSize: '1.5rem', backgroundColor: 'rgb(155, 80, 10)', color: 'white', borderRadius: '50px', padding: '0.6rem', position: 'relative', top: '1rem', right: '6rem'} 

    return (
      <>
      
      <div className={classes.newsletter}>
                <h3>Join our newsletter to stay up to date</h3>
                <p>Join our subscribers list to get the latest news, update <br />
                special offers delivered directly in your box.</p>
           <input placeholder='Your email address' type='text' /><AiOutlineArrowRight style={setStyle} />
            </div>

      </>  
    )
}

export default Newsletter;