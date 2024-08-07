import NavButton from '../NavButton/NavButton';
import styles from './Navbar.module.css';

const Navbar=()=>{
return(
    <nav className={styles.navbar}>
    <NavButton text="<- Back"/>
    <NavButton text="Next ->"/>
</nav>
);

}


export default Navbar;