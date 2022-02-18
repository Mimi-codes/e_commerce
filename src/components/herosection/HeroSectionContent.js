import HeroButton from './HeroButton';
import HeroImage from './HeroImage';
import classes from './HeroSectionContent.module.css';

function HeroSectionContent() {
return (
    <>
    <div className={classes['hero-section-content']}>
        <div className={classes['hero-text']}>
            <h2>the perfect cake everytime.</h2>
            <p>We are a company dedicated to the preparation of cakes, pies, smallchops and all, providing our customers 
                with products always fresh and fresh from the oven.</p>
    <HeroButton />
    </div>
    <HeroImage />
    </div>
    
    </>
)
}

export default HeroSectionContent;