
import classes from './FooterCopyright.module.css';
import {AiOutlineCopyright } from 'react-icons/ai';
import {HiOutlineMinus } from 'react-icons/hi';


function FooterCopyright() {
    return (
        <div className={classes.copyright}>       
        <p><AiOutlineCopyright />BRAND NAME 2022. All rights reserved.</p>
    <a href=''>Facebook</a><HiOutlineMinus className={classes.minus} /><a href=''>Instagram</a>
    <p>Website by <strong>Mimi Codes </strong></p>
        </div>
    )
}

export default FooterCopyright;