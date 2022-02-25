
import {IoIosArrowDroprightCircle } from 'react-icons/io';
import classes from './FooterContent.module.css'

function FooterContent() {
    return (
      <>
      <div className={classes['footer-content-body']}>
        <div className={classes.brand}>
        <h2 className={classes.logo}>brand name</h2>
        </div>

        <div className={classes['footer-links']}>
            <div className={classes.site}>
        <h3 className={classes['site-map']}>sitemap</h3>
                <ul>
                    <li><a href=''>home</a></li>
                    <li><a href=''>about us</a></li>
                    <li><a href=''></a>menu</li>
                    <li><a href=''></a>reservations</li>
                    <li><a href=''></a>order</li>
                    <li><a href=''></a>contact</li>
                </ul>
                </div>

                <div className={classes.explore}>
<h3 className={classes['explore-text']}>explore</h3>
<ul>
    <li><a href=''>cakes</a></li>
    <li><a href=''></a>pies</li>
    <li><a href=''></a>donuts</li>
    <li><a href=''></a>chin-chin</li>
    <li><a href=''></a>drinks</li>
</ul>
            </div>

            <div className={classes.newsletter}>
                <h3>Join our newsletter to stay up to date</h3>
                <p>Join our subscribers list to get the latest news, update <br />
                special offers delivered directly in your box.</p>
           <input placeholder='Your email address' type='text' /><IoIosArrowDroprightCircle />
            </div>


        </div>
</div>
      </>
    )
    }
    
    export default FooterContent;
