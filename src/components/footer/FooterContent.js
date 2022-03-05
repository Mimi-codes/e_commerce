
import classes from './FooterContent.module.css'
import SiteMap from '../footer/footer-links/SiteMap';
import Explore from './footer-links/Explore';
import Newsletter from './footer-links/Newsletter';

function FooterContent() {
  
  const setStyle = {fontSize: '1.5rem', backgroundColor: 'rgb(155, 80, 10)', color: 'white', borderRadius: '50px', padding: '0.6rem', position: 'relative', top: '1rem', right: '6rem'} 

  return (
      <>
      <div className={classes['footer-content-body']}>
        <div className={classes.brand}>
        <h2 className={classes.logo}>brand name</h2>
        </div>
        <SiteMap />
        <Explore />
        <Newsletter />
</div>
      </>
    )
    }
    
    export default FooterContent;
