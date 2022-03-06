import Explore from './Explore';
import classes from './SiteMap.module.css'


function SiteMap() {

    return (
      <>
      <div className ={classes.links}>
            <div className={classes.site}>
        <h3 className={classes['site-map']}>sitemap</h3>
                <ul className={classes['site-links']}>
                  <li><a href=''>home</a></li>
                    <li><a href=''>about us</a></li>
                    <li><a href=''>menu</a></li>
                    <li><a href=''>reservations</a></li>
                    <li><a href=''>order</a></li>
                    <li><a href=''>contact</a></li>
                </ul>
                </div>

<Explore />                
                </div>
      </>  
    )
}

export default SiteMap;