import styles from './NavButton.module.css';

const NavButton=({text})=>{
return(
    <div className={styles.navbutton}>
    <button>{text}</button>
    </div>
);

}


export default NavButton;