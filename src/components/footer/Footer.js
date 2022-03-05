
import classes from './Footer.module.css'
import FooterContent from './FooterContent';
import FooterCopyright from './FooterCopyright';

function Footer() {
    return (
      <>
      <div className={classes['footer-body']}>
          <FooterContent />
</div>

<FooterCopyright />
      </>
    )
    }
    
    export default Footer;