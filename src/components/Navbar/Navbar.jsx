import NavButton from '../NavButton/NavButton';
import styles from './Navbar.module.css';

const Navbar=()=>{
return(
    <nav className={styles.navbar}>
    <NavButton text="< Left"/>
    <NavButton text="Right >"/>
</nav>
);

}


export default Navbar;