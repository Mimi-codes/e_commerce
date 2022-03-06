
import classes from './FooterCopyright.module.css';
import {AiOutlineCopyright } from 'react-icons/ai';
import {HiOutlineMinus } from 'react-icons/hi';


function FooterCopyright() {
    return (
        <div className={classes.copyright}>       
        <p className={classes.rights}><AiOutlineCopyright />K & S Tastee Treats 2022. All rights reserved.</p>
    <div className={classes.social}><a href=''>Facebook</a><HiOutlineMinus className={classes.minus} /><a href=''>Instagram</a></div>
    <p className={classes.by}>Website by <strong>Mimi Codes </strong></p>
        </div>
    )
}

export default FooterCopyright;