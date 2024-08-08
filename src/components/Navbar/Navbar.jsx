import NavButton from '../NavButton/NavButton';
import styles from './Navbar.module.css';

const Navbar=({currStep, forward,backward})=>{
return(
    <nav className={styles.navbar}>
    <NavButton text="<- Back" flag={currStep===1?true:false}   action={backward}/>
    <NavButton text="Next ->" flag={currStep===3?true:false}   action={forward}/>
</nav>
);

}


export default Navbar;