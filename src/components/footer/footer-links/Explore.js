import classes from './Explore.module.css'


function Explore() {

    return (
      <> <div className={classes.explore}>
      <h3 className={classes['explore-text']}>explore</h3>
      <ul>
          <li><a href=''>cakes</a></li>
          <li><a href=''>pies</a></li>
          <li><a href=''>donuts</a></li>
          <li><a href=''>chin-chin</a></li>
          <li><a href=''>drinks</a></li>
      </ul>
                  </div>
      </>  
    )
}

export default Explore;